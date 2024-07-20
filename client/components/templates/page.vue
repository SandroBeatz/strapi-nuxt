<script setup lang="ts">
import {PAGE} from "~/graphql/page/page.query";

const lang = 'ru'

const route = useRoute()

const variables = { lang: lang, slug: route.params.page, }

const page = useAsyncQuery(PAGE, variables)

</script>

<template>
  <pre>{{page.data.value?.page.data}}</pre>
</template>

<style scoped>

</style>
