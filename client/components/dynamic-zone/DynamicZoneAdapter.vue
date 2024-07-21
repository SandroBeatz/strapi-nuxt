<script setup lang="ts">
interface Props {
  data: any
}

const props = defineProps<Props>()
const component = computed(() => {
  const name = props.data.__typename.split('DynamicZone')[1]

  return resolveComponent(name);
});
</script>

<template>
  <component :is="component" :data="data" />
</template>

<style scoped>

</style>
