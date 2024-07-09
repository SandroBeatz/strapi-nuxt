<script setup lang="ts">
const emits = defineEmits(['click'])

interface Props {
  label?: string
  image?: string
  alt?: string
}

defineProps<Props>()

</script>

<template>
  <a href="#" @click.prevent="emits('click')">
    <div class="">
      <img :src="image" :alt="alt || label">
    </div>
    <div class="text-center">
      <h5 class="font-bold text-lg uppercase">
        {{label}}
        <slot v-if="!label"/>
      </h5>
    </div>
  </a>
</template>

<style scoped>

</style>
