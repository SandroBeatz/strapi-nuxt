<script setup lang="ts">
import CategoryImg from "assets/img/categories/category-1.jpg"
import MCardItem from "~/components/shared/Cards/MCardItem.vue";
</script>

<template>
  <div class="py-6">
    <UContainer>
      <h2 class="text-2xl font-bold mb-8">Новинки</h2>
      <div class="grid grid-cols-5 gap-6">
        <m-card-item
            title="Футболка оверсайз"
            caption="Race Back"
            :image="CategoryImg"
            :price="3000"
        />
        <m-card-item
            title="Футболка оверсайз"
            caption="Race Back"
            :image="CategoryImg"
            :price="3000"
        />
        <m-card-item
            title="Футболка оверсайз"
            caption="Race Back"
            :image="CategoryImg"
            :price="3000"
        />
        <m-card-item
            title="Футболка оверсайз"
            caption="Race Back"
            :image="CategoryImg"
            :price="3000"
        />
        <m-card-item
            title="Футболка оверсайз"
            caption="Race Back"
            :image="CategoryImg"
            :price="3000"
        />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
