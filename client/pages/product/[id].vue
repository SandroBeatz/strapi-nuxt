<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div>
    <h1>Product Id {{route.params.id}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati sequi veritatis.</p>
  </div>
</template>
