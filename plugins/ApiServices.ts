import axios from 'axios';
import AuthAPI from '~/services/AuthAPI';
import CookieManager from '~/utils/cookies';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 60000,
});

const token = CookieManager.getCookie('X-API-KEY');

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.get['Content-Type'] = 'application/json';
instance.defaults.headers.put['Content-Type'] = 'application/json';
instance.defaults.headers.delete['Content-Type'] = 'application/json';
instance.defaults.headers.delete['Content-Type'] = 'application/json';

instance.defaults.headers.post['Accept'] = 'application/json';
instance.defaults.headers.get['Accept'] = 'application/json';
instance.defaults.headers.put['Accept'] = 'application/json';
instance.defaults.headers.delete['Accept'] = 'application/json';
instance.defaults.headers.delete['Accept'] = 'application/json';

if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const apiServices = {
  auth: new AuthAPI(instance, '/'),
};

export default apiServices;
