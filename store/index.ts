// store/index.js

// Import Vuex và tạo cửa hàng Vuex
import Vuex from 'vuex';

// Import các module Vuex riêng lẻ
import cart from './cart';

// Tạo cửa hàng Vuex
const store = () => {
  return new Vuex.Store({
    // Cấu hình chung cho cửa hàng Vuex
    state: {
      // Định nghĩa trạng thái chung ở đây nếu cần
    },
    mutations: {
      // Định nghĩa mutations chung ở đây nếu cần
    },
    actions: {
      // Định nghĩa actions chung ở đây nếu cần
    },

    // Các module Vuex riêng lẻ
    modules: {
      cart, // Module Vuex "cart"
      // Thêm các module Vuex khác nếu cần
    },
  });
};

export default store;
