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
  <a href="#" @click.prevent="emits('click')" class="group">
    <div class="aspect-[7/8] relative rounded-xl overflow-hidden transition-all top-0 group-hover:-top-1 group-hover:shadow-xl">
      <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="image"
          :alt="alt || label"
      >
    </div>
    <div class="text-center pt-2">
      <h5 class="font-medium text-sm">
        {{label}}
        <slot v-if="!label"/>
      </h5>
    </div>
  </a>
</template>

<style scoped>

</style>
