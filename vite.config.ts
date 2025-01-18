import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "stats.html", // 결과물 파일명
      template: "treemap", // 또는 'sunburst', 'network' 등
      gzipSize: true, // gzip 사이즈도 표시
    }),
  ],

  build: {
    assetsInlineLimit: 1024 * 500, // 기본값은 4096KB임
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        // assetFileNames: "js/[name]-[hash][extname]",
        // manualChunks(id) {
        //   // id: 모듈(파일)의 절대 경로 문자열

        //   // 예: /src/assets/about/ 폴더 경로가 포함된 파일이면 'about-chunk'에 할당
        //   if (id.includes("/assets/about/")) {
        //     return "about-chunk";
        //   }

        //   // 그 외는 자동 분할에 맡김
        // },
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
