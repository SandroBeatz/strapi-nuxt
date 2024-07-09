<script setup lang="ts">
import MCardCategory from "~/components/shared/Cards/MCardCategory.vue";
import CategoryImg from "@/assets/img/categories/category-1.jpg"
</script>

<template>
  <div class="grid grid-cols-5">
    <m-card-category
      :image="CategoryImg"
      alt="Тест"
    >Футболки</m-card-category>
  </div>
</template>

<style scoped>

</style>
