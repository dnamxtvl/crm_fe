import { defineStore } from 'pinia';
import LocalStorageManager from '~/utils/localStorage';
import { USER_PROFILE_KEY_NAME } from '~/constants/application';
import { JWT_KEY_ACEESS_TOKEN_NAME } from '~/constants/application';

export const useMainStore = defineStore({
  id: 'app',
  state: () => ({
    isLoggedIn: LocalStorageManager.getItemWithKey('isLoggedIn') ?? false,
    user: LocalStorageManager.getItemWithKey(USER_PROFILE_KEY_NAME) ?? null,
    token: LocalStorageManager.getItemWithKey(JWT_KEY_ACEESS_TOKEN_NAME) ?? null,
  }),
  getters: {
    isLoggedIn: (state: any) => state.isLoggedIn,
    user: (state: any) => state.user,
    token: (state: any) => state.token
  },
  actions: {
    login(state: any, user: any, token: string){
      state.isLoggedIn = true
      state.user = user
      state.token = token
    },

    logout(state: any) {
      state.isLoggedIn = false
      state.user = null
      state.token = null;
    },
  },
});
