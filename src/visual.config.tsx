import baseWidgets from "@/packages/base-widgets";
import { createVisualEditorConfig } from "./visual-editor/visual-editor.utils";

export const visualConfig = createVisualEditorConfig();
// 注册基础控件
Object.entries(baseWidgets).forEach(([name, widget]) => {
  visualConfig.registry("baseWidgets", name, widget);
});

console.log("visualConfig", visualConfig);
