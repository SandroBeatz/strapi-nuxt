// https://nuxt.com/docs/api/configuration/nuxt-config
// import {InMemoryCache} from "@apollo/client";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/apollo", "nuxt-swiper"],
  css: ['@/assets/css/main.scss'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
        // cache: new InMemoryCache(), // Настройка InMemoryCache
      },
    },
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'none'
      }
    },
  },

  compatibilityDate: "2024-07-15",
})
