<script setup lang="ts">
const emits = defineEmits(['click'])

interface Props {
  title: string
  image: string
  alt?: string
}

defineProps<Props>()

</script>

<template>
  <a href="#" @click.prevent="emits('click')" class="group relative">
    <div class="aspect-[4/3] relative rounded-3xl overflow-hidden transition-all group-hover:shadow-2xl">
      <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="image"
          :alt="alt || title"
      >
      <div class="absolute inset-0 w-full h-full z-10 bg-gradient-to-b from-slate-950 opacity-40"></div>
    </div>
    <div class="z-10 absolute inset-0 w-full h-full flex flex-col justify-center text-center pt-2">
      <h5 class="font-medium uppercase text-2xl text-white">
        {{title}}
      </h5>
    </div>
  </a>
</template>

<style scoped>

</style>
