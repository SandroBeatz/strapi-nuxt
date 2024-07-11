<script setup lang="ts">
interface Props {
  title: string
  caption: string
  price: number
  image: string
  alt?: string
}

defineProps<Props>()
</script>

<template>
<div class="">
  <div class="relative mb-3">

    <UButton
        icon="i-heroicons-heart"
        :ui="{ rounded: 'rounded-full' }"
        class="absolute right-2 top-2 z-10"
    />

    <a href="#" class="flex aspect-[4/5] relative rounded-xl overflow-hidden transition-all">
      <img
          :src="image"
          :alt="alt"
          class="absolute inset-0 w-full h-full object-cover"
      />
    </a>
  </div>
  <div class="">
    <h3 class="font-medium text-md">
      <a href="#" class="hover:underline text-slate-600">{{title}}</a>
    </h3>
    <div class="flex justify-between">
      <div class="flex-1">
        <p class="text-sm text-slate-400 mb-2">{{caption}}</p>
        <div class="flex items-center gap-3">
          <span class="text-md font-bold">{{price}}</span>
          <span class="line-through text-sm text-slate-400">{{price}}</span>
        </div>
      </div>
      <div class="flex flex-col justify-end">
<!--        <UButton-->
<!--            square-->
<!--            icon="i-heroicons-shopping-cart"-->
<!--            :ui="{ rounded: 'rounded-full' }"-->
<!--        ></UButton>-->
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>
