<template>
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary" v-if="isLoggined">
  <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
    <div class="container-fluid">
      <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
          <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="...">
      </a>
      <SidebarMobile />
      <Sidebar />
    </div>
  </nav>
  <div class="h-screen flex-grow-1 overflow-y-lg-auto">
    <Navbar />
    <main class="py-6 bg-surface-secondary">
      <div class="container-fluid">
        <!-- Card stats -->
        <div class="row g-6 mb-6">
            
        </div>
        <!-- <TableContent /> -->
        <NuxtPage />
      </div>
    </main>
  </div>
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
import { defineComponent, onMounted, getCurrentInstance, ref, nextTick } from 'vue';
import { useMainStore } from '~/store';

export default defineComponent({
  components: { Navbar, Sidebar, SidebarMobile, TableContent },
  setup() {
    const store = useMainStore();
    let isLoggined = ref(computed(() => store.$state.isLoggedIn));

    return {
      isLoggined
    };
  }
});
</script>

<style lang="scss">
@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>
