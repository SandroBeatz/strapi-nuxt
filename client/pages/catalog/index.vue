<script setup lang="ts">

import CategoryImg from "assets/img/categories/category-1.jpg";
import MCardItem from "~/components/shared/Cards/MCardItem.vue";

const categories = [{
  label: 'Верхняя одежда',
  to: '/components/vertical-navigation'
}, {
  label: 'Футболки',
  to: '/components/command-palette'
}, {
  label: 'Брюки',
  to: '/components/table'
}]

const sizes = [{
  label: '40',
  to: '/components/vertical-navigation'
}, {
  label: '42',
  to: '/components/command-palette'
}, {
  label: '44',
  to: '/components/table'
}, {
  label: '46',
  to: '/components/table'
}, {
  label: '48',
  to: '/components/table'
}]
</script>

<template>
<div class="py-8">
  <UContainer>
    <div class="grid grid-cols-5 gap-6 w-full">
      <div class="border-r border-slate-200 pr-6">
        <div class="mb-4">
          <h5>Мужская одежда</h5>
          <UVerticalNavigation :links="categories">
            <template #default="{ link }">
              <span class="group-hover:text-primary relative">{{ link.label }}</span>
            </template>
          </UVerticalNavigation>
        </div>

        <div class="mb-4">
          <h5>Размеры</h5>
          <UVerticalNavigation :links="sizes">
            <template #default="{ link }">
              <span class="group-hover:text-primary relative">{{ link.label }}</span>
            </template>
          </UVerticalNavigation>
        </div>
      </div>
      <div class="col-span-4">
        <div class="grid grid-cols-4 gap-6">
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
      </div>
    </div>
  </UContainer>
</div>
</template>

<style scoped>

</style>
