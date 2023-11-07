import { useMainStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useMainStore();

    if (!store.$state.isLoggedIn && to.path !== '/auth/login') {
        return navigateTo('/auth/login');
    }
});