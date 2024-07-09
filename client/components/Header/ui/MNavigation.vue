<script setup lang="ts">

interface Item {
  label: string
  to?: string
}

interface Props {
  items: Item[]
}

defineProps<Props>()

</script>

<template>
  <ul class="flex items-center gap-10">
    <template v-for="(item, index) in items" :key="index">
      <li>
        <nuxt-link :to="item.to">
          {{item.label}}
        </nuxt-link>
      </li>
    </template>
  </ul>
</template>

<style scoped>

</style>
