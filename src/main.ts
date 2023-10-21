import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/";

import Vant from "vant";
import "vant/lib/index.css";

// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "normalize.css"; // 标准样式库 normalize.css
import "virtual:windi.css"; // windi css
import "animate.css"; // 动画库

const app = createApp(App);

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }

app.use(ElementPlus);

// 使用vant插件
app.use(Vant);

app.use(router);
app.mount("#app");
