/*
 * @Author: Everest
 * @Date: 2023-10-16 21:17:06
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-21 22:32:41
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/visual-editor/components/left-aside/components/base-widgets/index.tsx
 * @Description: 基本组件
 *
 */

import { defineComponent } from "vue";
import { Edit } from "@element-plus/icons-vue";
import { visualConfig } from "@/visual.config";

export default defineComponent({
  name: "BaseWidgets",
  label: "基本组件",
  order: 3,
  icon: Edit,
  setup() {
    const baseWidgets = ref(visualConfig.componentModules.baseWidgets);
    return () => (
      <div>
        {baseWidgets.value.map((item, index) => (
          <div key={index}>{item.preview()}</div>
        ))}
      </div>
    );
  },
});
