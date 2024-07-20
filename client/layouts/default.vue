<script setup lang="ts">
import MFooter from "~/components/Footer/MFooter.vue";
import MHeader from "~/components/Header/MHeader.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <m-header/>
    <main class="flex-1">
      <NuxtPage />
    </main>
    <m-footer/>
  </div>
</template>

<style scoped>

</style>
