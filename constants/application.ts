export const VN_LOCALE = 'vi';

export const RULES_VALIDATION = {
    EMAIL_FORMAT: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    PHONE_FORMAT: /^[0-9-]{12,13}$|^[0-9-]{12}$/,
    ZIP_CODE: /^[0-9]{3}-?[0-9]{4}$/,
    VALID_TIME: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g,
}

export const EXPIRES_COOKIE_DAY = 90

export const BACKEND_URL_DEFAULT = 'http://ipcc_backend.test/api/';

export const JWT_KEY_ACEESS_TOKEN_NAME = '$2a$12$t538/WFhx.1iL//lRk3kI.9Ymqoyysb76hjXnPoa6b.8ZBx31Fg/i';

export const USER_PROFILE_KEY_NAME = '$2a$12$umoiVcYSuVz.Eja.JvtnbuXBxFdpRcdUs8hLyq7T2DGMrMNSvJzSa';
