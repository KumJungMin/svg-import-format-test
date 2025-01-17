<script setup lang="ts">
const files = Array.from(
  { length: 10 },
  (_, i) => new URL(`../assets/file-${i + 1}.png`, import.meta.url).href,
);
</script>

<template>
  <h1>About Page</h1>
  <ul>
    <li v-for="file in files" :key="file">
      <img :src="file" alt="file" />
    </li>
  </ul>
</template>
