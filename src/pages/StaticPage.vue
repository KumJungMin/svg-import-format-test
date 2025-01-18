<script setup lang="ts">
import HomeFile1 from "@/assets/home/file-1.png";
import HomeFile2 from "@/assets/home/file-2.png";
import HomeFile3 from "@/assets/home/file-3.png";
</script>

<template>
  <h1>Static Page</h1>
  <ul>
    <li v-for="file in [HomeFile1, HomeFile2, HomeFile3]" :key="file">
      <img :src="file" alt="file" />
    </li>
  </ul>
</template>
