import LocalStorageManager from "~/utils/localStorage";

export default defineNuxtPlugin(async () => {
    const config = useRuntimeConfig();
    await LocalStorageManager.setItemWithKey('BACKEND_URL_APP_VUE', config.public.BACKEND_URL);
});