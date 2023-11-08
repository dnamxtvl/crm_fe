<template>
  <nav
    class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    id="layout-navbar"
  >
    <div @click="responsiveSideBar"
      class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 cursor-pointer"
    >
      <a class="nav-item nav-link px-0 me-xl-4">
        <i class="ti ti-menu-2 ti-sm"></i>
      </a>
    </div>

    <div
      class="navbar-nav-right d-flex align-items-center"
      id="navbar-collapse"
    >
      <!-- Search -->
      <div class="navbar-nav align-items-center">
        <div class="nav-item navbar-search-wrapper mb-0">
          <a
            class="nav-item nav-link search-toggler d-flex align-items-center px-0"
            href="javascript:void(0);"
          >
            <i class="ti ti-search ti-md me-2"></i>
            <span class="d-none d-md-inline-block text-muted"
              >Search (Ctrl+/)</span
            >
          </a>
        </div>
      </div>
      <!-- /Search -->
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <!-- Style Switcher -->
        <li class="nav-item me-2 me-xl-0">
          <a
            class="nav-link style-switcher-toggle hide-arrow"
            href="javascript:void(0);"
          >
            <i class="ti ti-md"></i>
          </a>
        </li>
        <!--/ Style Switcher -->
        <!-- Notification -->
        <li
          class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1"
        >
          <a
            class="nav-link dropdown-toggle hide-arrow"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <i class="ti ti-bell ti-md"></i>
            <span class="badge bg-danger rounded-pill badge-notifications"
              >5</span
            >
          </a>
          <ul class="dropdown-menu dropdown-menu-end py-0">
            <li class="dropdown-menu-header border-bottom">
              <div class="dropdown-header d-flex align-items-center py-3">
                <h5 class="text-body mb-0 me-auto">Notification</h5>
                <a
                  href="javascript:void(0)"
                  class="dropdown-notifications-all text-body"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Mark all as read"
                  ><i class="ti ti-mail-opened fs-4"></i
                ></a>
              </div>
            </li>
          </ul>
        </li>
        <!--/ Notification -->
        <el-dropdown>
          <el-avatar :size="30" src="https://empty" @error="errorHandler">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            />
          </el-avatar>
          <template #dropdown>
            <el-dropdown-menu class="dropdown-menu-elemement-plus">
              <el-dropdown-item>
                <el-avatar :size="70" src="https://empty" @error="errorHandler">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                  />
                </el-avatar>

                <div class="username-profile ms-2">
                  {{ userInfo?.username }}
                </div>
              </el-dropdown-item>
              <div class="d-flex justify-content-center">
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item @click="logout">Logout</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!--/ User -->
      </ul>
    </div>
    <!-- Search Small Screens -->
    <div class="navbar-search-wrapper search-input-wrapper d-none">
      <input
        type="text"
        class="form-control search-input container-xxl border-0"
        placeholder="Search..."
        aria-label="Search..."
      />
      <i class="ti ti-x ti-sm search-toggler cursor-pointer"></i>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";
import api from "~/server/api/axios";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
import LocalStorageManager from "~/utils/localStorage";
import { JWT_KEY_ACEESS_TOKEN_NAME } from "~/constants/application";
import { useMainStore } from "~/store";
import { document } from "postcss";

export default defineComponent({
  components: {},
  name: "Navbar",
  props: {
    displaySideBar: {
      type: Boolean,
      default: () => false,
    }
  },
  setup(props, { emit }) {
    const store = useMainStore();
    let userInfo = ref(computed(() => store.$state.user));
    const logout = async () => {
      ElLoading.service({ fullscreen: true });
      await api.auth.logout(
        {},
        (res) => {
          ElLoading.service({ fullscreen: true }).close();
          notifySuccessAndRemoveTokenJwt();
          return navigateTo("/auth/login");
        },
        (err) => {
          ElLoading.service({ fullscreen: true }).close();
          ElNotification({
            title: "Error",
            message: err.error.shift(),
            type: "error",
          });
          return navigateTo("/auth/login");
        }
      );
    };

    const notifySuccessAndRemoveTokenJwt = () => {
      ElNotification({ title: "Success", type: "success" });
      LocalStorageManager.removeItem(JWT_KEY_ACEESS_TOKEN_NAME);
      LocalStorageManager.setItemWithKey("isLoggedIn", false);
      store.logout(store.$state);
    };

    const responsiveSideBar = () => {
      emit('closeOrOpenSideBar', !props.displaySideBar);
    }

    onMounted(() => {
      
    });

    return {
      logout,
      userInfo,
      responsiveSideBar,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
