import AuthAPI from '~/services/AuthAPI';

const api = {
  auth: new AuthAPI('/'),
};

export default api;
