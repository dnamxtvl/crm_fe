import Cookies from 'js-cookie';

interface ResponseData {
    data: any;
}

interface ErrorResponse {
    code: number;
    error: Record<string, string>;
    responseCode: string;
}

export default class BaseService {
    private api: any;
    private prefix: string;

    constructor(axios: any, prefix: string) {
        this.api = axios;
        this.prefix = prefix;
    }

    private processResponse(response: ResponseData): any {
        let data = response.data;
        if (data.hasOwnProperty('data')) {
            return data.data;
        }
        return data;
    }

    private logError(e: any, error: (error: ErrorResponse) => void) {
        if (error !== undefined && e.response !== undefined) {
            if (e.response.hasOwnProperty('status')) {
                if (e.response.status == 401) {
                    Cookies.remove('access_token');
                    Cookies.remove('role');
                    const previousUserId = Cookies.get('user_id') || '';
                    const queryString = `${window.location.pathname}${window.location.search}`;
                    Cookies.set('previous_user_id', previousUserId, {
                        expires: 90,
                    });
                    Cookies.set('redirectPath', queryString, {
                        expires: 90,
                    });
                    window.location.href = 'auth/login';
                    return;
                }

                let errors: Record<string, string> = {};
                if (e.response.data.errors) {
                    errors = Object.fromEntries(
                        Object.entries(e.response.data.errors).map(([key, value]: [string, string[]]) => [key, value[0]])
                    );
                }
                error({
                    code: e.response.status,
                    error: errors,
                    responseCode: e.response.data.responseCode,
                });
            }
        }
    }

    async get(endpoint: string, success: (json: any) => void, error: (error: ErrorResponse) => void) {
        try {
            const response = await this.api.get(this.prefix + endpoint);
            const json = this.processResponse(response);
            success(json);
        } catch (e) {
            this.logError(e, error);
        }
    }

    async post(
        endpoint: string,
        params: Record<string, any> = {},
        success: (json: any) => void,
        error: (error: ErrorResponse) => void
    ) {
        try {
            const response = await this.api.post(this.prefix + endpoint, params);
            const json = this.processResponse(response);
            success(json);
        } catch (e) {
            this.logError(e, error);
        }
    }

    async put(
        endpoint: string,
        params: Record<string, any> = {},
        success: (json: any) => void,
        error: (error: ErrorResponse) => void
    ) {
        try {
            const response = await this.api.put(this.prefix + endpoint, params);
            const json = this.processResponse(response);
            success(json);
        } catch (e) {
            this.logError(e, error);
        }
    }

    async delete(endpoint: string, data: Record<string, any> = {}, success: (json: any) => void, error: (error: ErrorResponse) => void) {
        try {
            const response = await this.api.delete(this.prefix + endpoint, { data });
            const json = this.processResponse(response);
            success(json);
        } catch (e) {
            this.logError(e, error);
        }
    }

    async patch(
        endpoint: string,
        params: Record<string, any> = {},
        success: (json: any) => void,
        error: (error: ErrorResponse) => void
    ) {
        try {
            const response = await this.api.patch(this.prefix + endpoint, params);
            const json = this.processResponse(response);
            success(json);
        } catch (e) {
            this.logError(e, error);
        }
    }

    urlParse(obj: Record<string, any>, query = false): string {
        const str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p) && obj[p] !== null && obj[p] !== undefined && obj[p] !== '') {
                if (obj[p] === true) obj[p] = 1;
                if (obj[p] === false) obj[p] = 0;
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
        }

        if (query) return '?' + str.join('&') + '&' + query;
        return '?' + str.join('&');
    }
}
