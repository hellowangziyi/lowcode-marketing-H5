import {
  createEditorInputNumberProp,
  createEditorInputProp,
  createEditorSelectProp,
} from "@/visual-editor/visual-editor.props";

/*
 * @Author: Everest
 * @Date: 2023-10-28 22:37:23
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-30 14:58:03
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/packages/base-widgets/text/index.tsx
 * @Description:
 *
 */
import { fontArr } from "./fontArr";
import { useGlobalProperties } from "@/hooks/useGlobalProperties";
export default {
  key: "text",
  moduleName: "baseWidgets",
  label: "文本",
  preview: () => <span>预览文本</span>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div
        ref={(el) => registerRef(el, block._vid)}
        style={{
          color: props.color,
          fontSize: `${props.size}px`,
          fontFamily: props.font,
          ...styles,
        }}
      >
        {props.text || "默认文本"}
      </div>
    );
  },
  props: {
    text: createEditorInputProp({ label: "显示文本" }),
    font: createEditorSelectProp({ label: "字体设置", options: [...fontArr] }),
    color: createEditorInputProp({ label: "字体颜色" }),
    size: createEditorInputNumberProp({ label: "字体大小", defaultValue: 16 }),
  },
};
