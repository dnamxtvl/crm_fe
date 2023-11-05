import axiosInstance from '@/plugins/axios';
import AuthAPI from '~/services/AuthAPI';

const services = {
  auth: new AuthAPI(axiosInstance, '/'),
};

export default services;
