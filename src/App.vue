<script setup lang="ts">
import { onMounted, ref } from 'vue';

// 40개의 파일 중 21개만 쓰지만, index.js에는 40개의 파일이 모두 포함되어 있음
// (추측) 동적 import이지만, 빌드 과정에서 패턴 매칭을 통해 파일을 가져오기 때문에, 사용하지 않는 파일이라도 번들에 포함됨?
const files = ref<string[]>([])
onMounted(() => {
  console.log('Component mounted');
  setTimeout(() => {
    files.value = Array.from({ length: 21 }, (_, i) => new URL(`./assets/file-${i + 1}.png`, import.meta.url).href);
  }, 1000)
});
</script>

<template>
  <div v-for="(file, index) in files" :key="index">
    <img :src="file" :alt="'file-' + (index + 1)" />
  </div>
</template>
