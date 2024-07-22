export default defineNuxtRouteMiddleware((to, from) => {
    const reg = /^\/(men|women|kids)/

    if (reg.test(to.path)) {
        to.meta.template = 'catalog';
    } else {
        to.meta.template = 'page';
    }
});
