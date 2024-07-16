<script setup lang="ts">
import MHeroSliderSection from "~/components/dynamic-zone/HeroSlider/MHeroSliderSection.vue";
import MCategoriesSliderSection from "~/components/dynamic-zone/CategoriesSlider/MCategoriesSliderSection.vue";
import MProductsSliderSection from "~/components/dynamic-zone/ProductsSlider/MProductsSliderSection.vue";
import MCollectionsSection from "~/components/dynamic-zone/Collections/MCollectionsSection.vue";
import type {QueryResult} from "@apollo/client";
import gql from 'graphql-tag'

const nav = gql`
  query renderNavigation($lang: I18NLocaleCode!) {
    renderNavigation(locale: $lang navigationIdOrSlug: "navigation" type: TREE) {
      id
      title
      path
      menuAttached
      show_in_footer
      externalPath
      parent {
        id
        title
        path
      }
    }
  }
`

const page = gql`
  query page {
    page(id: 1 locale: "ru") {
      data {
        id
        attributes {
          title
          description
          slug
        }
      }
    }
}
`
const variables = { lang: "ru" }

const navigation = useAsyncQuery<QueryResult>(nav, variables)

navigation.then((res: any) => {
  console.log(res)
})

</script>

<template>
<!--  <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>-->
  <pre>{{navigation.data.value}}</pre>
  <m-hero-slider-section />
  <m-categories-slider-section/>
  <m-products-slider-section/>
  <m-collections-section/>
  <!--
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <u-button icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</u-button>
    </UCard>
  </UContainer>
  -->
</template>

<style scoped>

</style>
