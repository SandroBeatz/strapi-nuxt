<script setup lang="ts">
// import {useNavigationStore} from "~/stores/common/navigation";

// await useAsyncData('navigation', () => useNavigationStore().fetchData())

// import {NAVIGATIONS} from "~/graphql/navigations/navigation.query";
//
// interface Query {
//   renderNavigation: any[]
// }
//
// const variables = { lang: "ru" }
//
// const navigation = useAsyncQuery<Query>(NAVIGATIONS, variables)
//
// const nuxtApp = useNuxtApp()
//
// nuxtApp.provide('navigation', navigation.data.value?.renderNavigation ?? [])
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


