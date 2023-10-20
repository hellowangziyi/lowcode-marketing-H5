/*
 * @Author: Everest
 * @Date: 2023-09-30 22:36:51
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-20 22:22:39
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 支持jsx
import path from "path";
import AutoImport from "unplugin-auto-import/vite"; //自动导入
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VantResolver } from "unplugin-vue-components/resolvers"; //引入Vant
import WindiCSS from "vite-plugin-windicss"; // windicss

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    vueJsx(),
    // https://github.com/antfu/unplugin-auto-import#readme
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ["vue", "vue-router"],
    }),
    // AutoImport({
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //     /\.md$/, // .md
    //   ],
    //   // Auto import functions from Vue, e.g. ref, reactive, toRef...
    //   // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    //   imports: ["vue"],

    //   // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
    //   // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    //   resolvers: [
    //     ElementPlusResolver(),

    //     // Auto import icon components
    //     // 自动导入图标组件
    //     IconsResolver({
    //       prefix: "Icon",
    //     }),
    //   ],

    //   dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    // }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        VantResolver(),
      ],
    }),

    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathSrc,
      },
    ],
  },
});
