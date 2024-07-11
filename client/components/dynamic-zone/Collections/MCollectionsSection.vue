<script setup lang="ts">
import CategoryImg from "assets/img/categories/category-1.jpg";
import MCardCollection from "~/components/shared/Cards/MCardCollection.vue";

</script>

<template>
  <div class="py-6">
    <UContainer>
      <div class="grid grid-cols-2 gap-6">
        <m-card-collection
            :image="CategoryImg"
            title="Подборка Осень/Зима"
        />
        <m-card-collection
            :image="CategoryImg"
            title="Подборка Осень/Зима"
        />
        <m-card-collection
            :image="CategoryImg"
            title="Подборка Осень/Зима"
        />
        <m-card-collection
            :image="CategoryImg"
            title="Подборка Осень/Зима"
        />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
