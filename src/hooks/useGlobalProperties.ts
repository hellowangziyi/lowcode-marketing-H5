import { RouteLocationNormalizedLoaded, Router } from "vue-router";

interface GlobalProperties {
  $$refs: any;
  $route: RouteLocationNormalizedLoaded;
  $router: Router;
}

/**----------------------
 *    @description 管理全局属性和引用
 *------------------------**/
export const useGlobalProperties = () => {
  //app.config.globalProperties​
  //一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。
  const globalProperties = getCurrentInstance()!.appContext.config
    .globalProperties as GlobalProperties;

  console.log("globalProperties", globalProperties);
  const registerRef = (el, _vid: string) =>
    el && (globalProperties.$$refs[_vid] = el);

  return { globalProperties, registerRef };
};
