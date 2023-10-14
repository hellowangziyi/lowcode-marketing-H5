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

// 深拷贝
function promiseAll(arry) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arry)) {
      throw new TypeError("arg not a array！");
    }
    let count = 0;
    const resolveArray = [];
    const length = arry.length;
    for (let i = 0; i < length; i++) {
      Promise.resolve(arry[i]).then((val) => {
        count++;
        resolveArray.push(val);
        if (count === length) {
          return resolve(resolveArray);
        }
      }).catch(e=> reject(e));
    }
  });
}
