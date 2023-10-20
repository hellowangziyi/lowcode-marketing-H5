import { DefineComponent } from "vue";

//寻找components文件夹下的文件 globEager已弃用
const modules = import.meta.glob("./*/index.(tsx|vue)", { eager: true });

const components: Record<string, DefineComponent> = {};

console.log("modules", modules);

for (const path in modules) {
  const comp = modules[path].default;
  if (comp.label !== "数据源" && comp.label !== "页面") {
    components[comp.name || path.split("/")[1]] = comp;
  }
}

console.log("left-aside components:", components);

export default components;
