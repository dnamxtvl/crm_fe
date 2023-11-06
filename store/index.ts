import { defineStore } from 'pinia';
import LocalStorageManager from '~/utils/localStorage';

export const useMainStore = defineStore({
  id: 'app',
  state: () => ({
    isLoggedIn: LocalStorageManager.getItemWithKey('isLoggedIn') ?? false,
    user: null,
  }),
  getters: {
    isLoggedIn: (state: any) => state.isLoggedIn,
    user: (state: any) => state.user
  },
  actions: {
    login(state: any, user: any){
      state.isLoggedIn = true
      state.user = user
    },

    logout(state: any) {
      state.isLoggedIn = false
      state.user = null
    },
  },
});
