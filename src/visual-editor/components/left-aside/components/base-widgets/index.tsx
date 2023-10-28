/*
 * @Author: Everest
 * @Date: 2023-10-16 21:17:06
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-26 15:43:17
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/visual-editor/components/left-aside/components/base-widgets/index.tsx
 * @Description: 基本组件
 *
 */

import { defineComponent } from "vue";
import { Edit } from "@element-plus/icons-vue";
import { visualConfig } from "@/visual.config";
import { cloneDeep } from "lodash-es";
import { createNewBlock } from "@/visual-editor/visual-editor.utils";
import DraggableTransitionGroup from "@/visual-editor/components/simulator-editor/draggable-transition-group.vue";

export default defineComponent({
  name: "BaseWidgets",
  label: "基本组件",
  order: 3,
  icon: Edit,
  setup() {
    const baseWidgets = ref(visualConfig.componentModules.baseWidgets);

    const cloneDog = (comp) => {
      console.log("clone", comp);
      const newComp = cloneDeep(comp);
      return createNewBlock(newComp);
    };

    return () => (
      <>
        {/* {baseWidgets.value.map((item, index) => (
          <div key={index}>{item.preview()}</div>
        ))} */}

        <DraggableTransitionGroup
          v-model={baseWidgets.value}
          group={{ name: "components", pull: "clone", put: false }}
          clone={cloneDog}
          itemKey={"key"}
        >
          {{
            item: ({ element }) => (
              <div data-label={element.label}>{element.preview()}</div>
            ),
          }}
          
        </DraggableTransitionGroup>
      </>
    );
  },
});
