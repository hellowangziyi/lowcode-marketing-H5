import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 支持jsx
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite"; //自动导入
import WindiCSS from "vite-plugin-windicss"; // windicss

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport(), WindiCSS(), vueJsx()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
