export default defineNuxtRouteMiddleware((to, from) => {
    if (/^\/(men|women|kids)/.test(to.path)) {
        to.meta.template = 'catalog';
    } else {
        to.meta.template = 'page';
    }
});
