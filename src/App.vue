<script setup lang="ts">
import Logo from "./assets/vue.svg";

import LongTree from "./assets/city.jpg";
import LongTree2 from "./assets/city-2.jpg";
import LongTree3 from "./assets/city-3.jpg";
import LongTree4 from "./assets/city-4.jpg";
import LongTree5 from "./assets/city-5.jpg";

import VueLogo from "./assets/vue.png";
import VueLogo2 from "./assets/vue-2.png";
import VueLogo3 from "./assets/vue-3.png";
import VueLogo4 from "./assets/vue-4.png";

import SmallVueLogo from "./assets/small-vue.png";
import SmallVueLogo2 from "./assets/small-vue-2.png";
import SmallVueLogo3 from "./assets/small-vue-3.png";
import SmallVueLogo4 from "./assets/small-vue-4.png";
import SmallVueLogo5 from "./assets/small-vue-5.png";
</script>

<template>
  <img :src="Logo" alt="Vue logo" />
  <img :src="LongTree" alt="Long tree" />
  <img :src="LongTree2" alt="Long tree 2" />
  <img :src="LongTree3" alt="Long tree 3" />
  <img :src="LongTree4" alt="Long tree 4" />
  <img :src="LongTree5" alt="Long tree 5" />

  <img :src="VueLogo" alt="Vue logo" />
  <img :src="VueLogo2" alt="Vue logo 2" />
  <img :src="VueLogo3" alt="Vue logo 3" />
  <img :src="VueLogo4" alt="Vue logo 4" />

  <img :src="SmallVueLogo" alt="Small Vue logo" />
  <img :src="SmallVueLogo2" alt="Small Vue logo 2" />
  <img :src="SmallVueLogo3" alt="Small Vue logo 3" />
  <img :src="SmallVueLogo4" alt="Small Vue logo 4" />
  <img :src="SmallVueLogo5" alt="Small Vue logo 5" />
</template>
