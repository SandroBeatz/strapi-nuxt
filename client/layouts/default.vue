<script setup lang="ts">

</script>

<template>
<div class="s-default-wrapper">
  <main class="flex-1">
    <slot></slot>
  </main>
</div>
</template>

<style scoped lang="scss">
.s-default-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
