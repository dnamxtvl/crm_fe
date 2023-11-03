<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header"></slot>
                    <IconCircleClose
                        @click="$emit('close', true)"
                    />
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
    import { computed, defineComponent } from 'vue';
    import IconCircleClose from '@/svg/IconCircleClose.vue';

    export default defineComponent({
        components: { IconCircleClose },
        props: {
            show: {
                type: Boolean,
                default: false,
            },
            modalTitle: {
                type: String,
                default: 'Modal Title',
            },
            width: {
                type: String,
                default: 'fit-content',
            },
        },

        setup(props) {
            const modalContainerStyle = computed(() => {
                return {
                    '--height': props.width,
                };
            });

            return { modalContainerStyle };
        },
    });
</script>

<style lang="scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        transition: opacity 0.3s ease;
    }

    .modal-container {
        width: var(--width);
        margin: auto;
        max-height: 90vh;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        position: relative;
        display: grid;
        grid-template-rows: 1fr;
    }

    .modal-header {
        border-bottom: 1px solid var(--grey-3);
        width: 100%;
        top: 0;
        left: 0;
        min-height: 64px;
        display: flex;
        position: relative;

        svg {
            cursor: pointer;
            position: absolute;
            top: 5%;
            right: 1%;
        }
    }

    .modal-header h5 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 0;
    }

    .modal-body {
        overflow-y: hidden;
        height: 100%;
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
