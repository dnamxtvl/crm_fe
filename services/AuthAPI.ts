import BaseService from './BaseService';
import API_CONST from '~/utils/api_const';

export default class AuthAPI extends BaseService {
    async login(params: Object, success: any, error: any) {
        await this.post(API_CONST.AUTH_LOGIN, params, success, error);
    }

    async logout(params: Object, success: any, error: any) {
        await this.post(API_CONST.AUTH_LOGOUT, params, success, error);
    }
}
