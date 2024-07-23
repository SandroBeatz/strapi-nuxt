<script setup lang="ts">
interface Props {
  id: string
  title: string
  caption: string
  image: string
  alt?: string
  price: number
  oldPrice?: number
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
        color="rose"
        variant="soft"
    />

    <nuxt-link :to="`/product/${id}`" class="flex aspect-[4/5] relative rounded-xl overflow-hidden transition-all">
      <img
          :src="`http://localhost:1337${image}`"
          :alt="alt"
          class="absolute inset-0 w-full h-full object-cover"
      />
    </nuxt-link>
  </div>
  <div class="">
    <h3 class="font-medium text-md">
      <nuxt-link :to="`/product/${id}`" class="hover:underline text-slate-600">{{title}}</nuxt-link>
    </h3>
    <div class="flex justify-between">
      <div class="flex-1">
        <p class="text-sm text-slate-400 mb-2">{{caption}}</p>
        <div class="flex items-center gap-3">
          <span class="text-md font-bold">{{price}}</span>
          <span v-if="oldPrice" class="line-through text-sm text-slate-400">{{oldPrice}}</span>
        </div>
      </div>
      <div class="flex flex-col justify-end">
        <UButton
            square
            icon="i-heroicons-shopping-cart"
            :ui="{ rounded: 'rounded-full' }"
        ></UButton>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>
