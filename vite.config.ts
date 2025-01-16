import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 1024 * 9, // 기본값은 4096KB임
  },
});
