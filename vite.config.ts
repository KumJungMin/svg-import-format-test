import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    // assetsInlineLimit: 1024 * 500, // 기본값은 4096KB임
    assetsInlineLimit: 1
  }
});
