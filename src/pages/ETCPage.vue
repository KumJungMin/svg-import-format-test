<script setup lang="ts">
import { getETCFileImage } from "../utils";

// const files1 = Array.from({ length: 3 }, (_, i) =>
//   getETCImage(`file-${i + 31}`),
// );

/**
 * 청크를 만들 때 만약 똑같을 파일을 복사해서 이름만 다르게 해도
 * 같은 파일이라고 인식해서 청크에 포함된다...!
 */
const files2 = Array.from({ length: 3 }, (_, i) =>
  getETCFileImage(`${i + 31}`),
);
</script>

<template>
  <h1>ETC Page</h1>
  <ul>
    <li v-for="file in files2" :key="file">
      <img :src="file" alt="file" />
    </li>
  </ul>
</template>
