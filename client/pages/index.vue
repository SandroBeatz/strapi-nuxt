<script setup lang="ts">
import MHeroSliderSection from "~/components/dynamic-zone/MHeroSliderSection.vue";
import MCategoriesSliderSection from "~/components/dynamic-zone/MCategoriesSliderSection.vue";
import MProductsSliderSection from "~/components/dynamic-zone/MProductsSliderSection.vue";
import MCollectionsSection from "~/components/dynamic-zone/MCollectionsSection.vue";
import {PAGE} from "~/graphql/page/page.query";

const lang = 'ru'

const variables = { lang: lang, slug: 'home', }

const page = useAsyncQuery(PAGE, variables)

const pageData = computed(() => {
  return page.data.value?.page ? page.data.value?.page.data.attributes.dynamic_zone : []
})

</script>

<template>
  <div>
    <template v-for="(el, i) in pageData" :key="i">
      <dynamic-zone-adapter :data="el"/>
    </template>
  </div>

<!--  <pre>{{page.data.value?.page.data}}</pre>-->
  <m-hero-slider-section />
  <m-categories-slider-section/>
  <m-products-slider-section/>
  <m-collections-section/>
</template>

<style scoped>

</style>
