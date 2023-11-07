<template>
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Đăng Nhập</h2>
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5" @submit="login">
            <div class="text-center d-flex justify-content-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic-login img-thumbnail rounded-circle my-3"
                width="200" alt="profile">
            </div>
            <div class="valiate-message-error" v-if="validateMessageErrors.length">
              <div class="valiate-message-error-item" v-for="message in validateMessageErrors">
                <el-alert :title="message" type="error" :closable="false"/>
              </div>
            </div>
            <div class="mb-3">
              <input type="text" v-model="userInfo.username" class="form-control" id="username" aria-describedby="emailHelp"
                placeholder="User Name" required>
            </div>
            <div class="mb-3">
              <input type="password" v-model="userInfo.password" class="form-control" id="password" placeholder="Password" required>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-success px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-primary fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import apiServices from '~/plugins/ApiServices';
import { ElLoading } from 'element-plus';
import { ElNotification } from 'element-plus';
import { useMainStore } from '~/store';
import LocalStorageManager from '~/utils/localStorage';

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useMainStore();
    let userInfo = ref({
      username: '',
      password: ''
    });

    let validateMessageErrors = ref([]);

    const login = async (event: any) => {
      event.preventDefault();
      ElLoading.service({ fullscreen: true });

      await apiServices.auth.login(
        userInfo.value,
        (res: any) => {
          ElLoading.service({ fullscreen: true }).close();
          notifySuccessAndRemoveValidateMessage();
          setValueStoreLogin();
          return navigateTo("");
        },
        (err: any) => {
          console.log(err);
          ElLoading.service({ fullscreen: true }).close();
          validateMessageErrors.value = err.error;
        }
      )
    };

    const notifySuccessAndRemoveValidateMessage = () => {
      ElNotification({ title: 'Success', type: 'success'});
      validateMessageErrors.value = [];
    }

    const setValueStoreLogin = () => {
      LocalStorageManager.setItemWithKey('isLoggedIn', true);
      store.login(store.$state, null);
    }

    const checkLoginStatus = () => {
      if (store.$state.isLoggedIn) {
        return navigateTo("");
      }
    }

    onMounted(async () => {
      checkLoginStatus();
    });

    return {
      userInfo,
      validateMessageErrors,
      login,
      checkLoginStatus
    };
  }
});

</script>
