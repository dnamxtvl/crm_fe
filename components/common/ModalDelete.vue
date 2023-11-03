<template>
  <Modal :show="isShowModal" @close="close">
    <template #body>
      <div class="content">
        <IconWarning />
        <p>{{ message }}</p>
      </div>
    </template>
    <template #footer>
      <div class="button-wrap">
        <el-button color="#626aef" plain @click="close">{{ $t('common.cancel') }}</el-button>
        <el-button color="red" plain @click="confirmDelete">{{ $t('common.delete') }}</el-button>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/common/Modal.vue";
import IconWarning from "../../svg/IconWarning.vue";

export default {
  components: {
    Modal,
    IconWarning
  },
  props: {
    isShowModal: {
      type: Boolean,
      default: () => false,
    },
    id: {
      type: Number,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const close = (value) => {
      emit('closeModal', value);
    };

    const confirmDelete = () => {
      emit("deleteItem", props.id);
    };

    return {
      close,
      confirmDelete,
    }
  }
};
</script>

<style lang="scss" scoped>
.content svg {
  width: 100%;
}
.button-wrap {
  display: flex;
  justify-content: end;
}
</style>
