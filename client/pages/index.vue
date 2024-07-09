<script setup lang="ts">

import MHeader from "~/components/Header/MHeader.vue";
import MFooter from "~/components/Footer/MFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <m-header/>
    <main class="flex-1">
      <UContainer>
        <UCard class="mt-10">
          <template #header>
            <div class="flex justify-between">
              <h1>Welcome to Nuxt UI Starter</h1>
              <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
            </div>
          </template>
          <u-button icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</u-button>
        </UCard>
      </UContainer>
    </main>
    <m-footer/>
  </div>
</template>

<style scoped>

</style>
