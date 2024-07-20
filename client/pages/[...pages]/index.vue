<template>
  <component :is="templateComponent" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

const templateComponent = computed(() => {
  const template = route.meta.template;

  if (template === 'catalog') {
    return defineAsyncComponent(() => import('~/components/templates/catalog.vue'));
  } else {
    return defineAsyncComponent(() => import('~/components/templates/page.vue'));
  }
});
</script>
