<template>
  <div class="layout-wrapper layout-content-navbar" v-if="isLoggined">
    <div class="layout-container">
      <!-- Menu -->
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme" :class="{ activeSideBar: isDisplaySideBar, activeSideBarMobile: !isDisplaySideBar}"
      >
        <div class="app-brand demo app-brand-demo">
          <span class="app-brand-link">
            <span class="app-brand-logo demo">
              <svg
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                  fill="#7367F0"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                  fill="#161616"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                  fill="#161616"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                  fill="#7367F0"
                />
              </svg>
            </span>
            <span class="app-brand-text demo menu-text fw-bold">Vuexy</span>
          </span>
          <span class="layout-menu-toggle menu-link text-large ms-auto ms-2 cursor-pointer" @click="closeSideBarMobile">
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </span>
        </div>
        <div class="menu-inner-shadow"></div>
        <Sidebar />
      </aside>
      <!-- / Menu -->
      <!-- Layout container -->
      <div class="layout-page">
        <Navbar :displaySideBar="isDisplaySideBar" @closeOrOpenSideBar="displayOrNoneSideBar" />
        <div class="content-wrapper">
          <NuxtPage />
          <div class="content-backdrop fade"></div>
        </div>
      </div>
      <!-- / Layout page -->
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/common/Navbar.vue";
import Sidebar from "./components/common/Sidebar.vue";
import SidebarMobile from "./components/common/SidebarMobile.vue";
import TableContent from "./components/common/TableContent.vue";
import { defineComponent, ref } from "vue";
import { useMainStore } from "~/store";

export default defineComponent({
  components: { Navbar, Sidebar, SidebarMobile, TableContent },
  setup() {
    const store = useMainStore();
    let isLoggined = ref(computed(() => store.$state.isLoggedIn));
    let isDisplaySideBar = ref(false);

    const displayOrNoneSideBar = (value) => {
      isDisplaySideBar.value = value
    }

    const closeSideBarMobile = () => {
      isDisplaySideBar.value = !isDisplaySideBar.value;
    }

    return {
      isLoggined,
      closeSideBarMobile,
      displayOrNoneSideBar,
      isDisplaySideBar
    };
  },
});
</script>
<style lang="scss" scoped>
.activeSideBar {
  width: 0;
}

.activeSideBarMobile {
  transform: translate3d(0, 0, 0) !important;
}
</style>