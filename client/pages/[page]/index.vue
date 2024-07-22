<template>
  <component :is="templateComponent" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const template = route.meta.template;

const templateComponent = computed(() => {
  if (template === 'catalog') {
    return defineAsyncComponent(() => import('~/components/templates/catalog.vue'));
  } else {
    return defineAsyncComponent(() => import('~/components/templates/page.vue'));
  }
});
</script>
