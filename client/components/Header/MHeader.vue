<script setup lang="ts">
import MBasketButton from "~/components/Header/ui/MBasketButton.vue";
import MNavigation from "~/components/Header/ui/MNavigation.vue";

const links = [{
  label: 'Новинки',
  to: `/`
}, {
  label: 'Бренды',
  to: '/'
}, {
  label: 'Распродажа',
  to: '/'
}]
</script>

<template>
  <div class="border-b border-gray-200 py-4">
    <UContainer :ui="{constrained: 'max-w-full'}">
      <div class="flex items-center">
        <div class="flex items-center">
          <UButton
              icon="i-heroicons-bars-3-bottom-left-solid"
              size="xl"
              color="primary"
              square
              variant="ghost"
              class="mr-4"
          />
          <nuxt-link>
            <img src="@/assets/img/logo.svg" alt="Monday" class="w-auto h-8">
          </nuxt-link>

          <m-navigation :items="links" class="ml-6 mr-6"/>

          <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search..."
              class="mx-auto"
          />
        </div>
        <div class="ml-auto flex items-center">
          <m-basket-button class="mr-6"/>
          <UAvatar
              chip-color="primary"
              chip-text=""
              chip-position="top-right"
              size="md"
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
