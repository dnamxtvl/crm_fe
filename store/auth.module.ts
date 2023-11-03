import Cookies from 'js-cookie';
const token = Cookies.get('access_token');
const initialState = token ? { status: { loggedIn: true }, token } : { status: { loggedIn: false }, token: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    loginSuccess(user) {
      return Promise.resolve(user);
    },
    logout({ commit }) {
      Cookies.remove('access_token');
      commit('logout');
    },
    initCurrentData({ commit }, user) {
      commit('initCurrentData', user);
    },
  },
  mutations: {
    initCurrentData(state, user = {}) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginSuccess(state, user = {}) {
      state.status.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
};
