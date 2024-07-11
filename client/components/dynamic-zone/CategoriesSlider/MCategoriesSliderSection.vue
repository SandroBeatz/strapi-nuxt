<script setup lang="ts">
import MCardCategory from "~/components/shared/Cards/MCardCategory.vue";
import CategoryImg from "@/assets/img/categories/category-1.jpg"
</script>

<template>
  <div class="pb-8">
    <UContainer>
      <div class="grid grid-cols-8 gap-6">
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Верхняя одежда</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Футболки</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Брюки</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Костюмы</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Кепки</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Обувь</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Аксессуары</m-card-category>
        <m-card-category
            :image="CategoryImg"
            alt="Тест"
        >Джогеры</m-card-category>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
