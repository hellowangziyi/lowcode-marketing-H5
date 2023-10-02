import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // 进度条样式

NProgress.configure({ showSpinner: false });

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/visual-editor/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
  return true;
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
