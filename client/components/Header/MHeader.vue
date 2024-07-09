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

const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }]
]
</script>

<template>
  <header class="border-b border-gray-200 py-4">
    <UContainer :ui="{constrained: 'max-w-full'}">
      <div class="flex items-center">
        <div class="flex items-center flex-1">
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

          <m-navigation :items="links" class="ml-12 mr-12"/>

          <div class="flex flex-1 justify-center">
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search..."
                class="w-4/5"
                :ui="{rounded: 'rounded-full'}"
            />
          </div>

        </div>
        <div class="ml-auto flex items-center pl-10">
          <m-basket-button class="mr-6"/>

          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UAvatar
                chip-color="primary"
                chip-text=""
                chip-position="top-right"
                size="md"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
            />
          </UDropdown>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<style scoped>

</style>
