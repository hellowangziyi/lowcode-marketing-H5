/*
 * @Author: Everest
 * @Date: 2023-10-21 21:16:33
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-21 21:16:44
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/packages/base-widgets/button/index.tsx
 * @Description:
 *
 */
import {
  createEditorInputProp,
  createEditorSelectProp,
} from "@/visual-editor/visual-editor.props";
import { Button } from "vant";
export default {
  key: "button",
  moduleName: "baseWidgets",
  preview: () => <Button type={"primary"}>按钮</Button>,
  render: ({ props, block, styles }) => {},
  resize: { height: true, width: true },
  events: [
    { label: "点击按钮，且按钮状态不为加载或禁用时触发", value: "click" },
    { label: "开始触摸按钮时触发", value: "touchstart" },
  ],
  props: {
    text: createEditorInputProp({ label: "按钮文字", defaultValue: "按钮" }),
    type: createEditorSelectProp({
      label: "按钮类型",
      options: [
        {
          label: "主要按钮",
          value: "primary",
        },
        {
          label: "成功按钮",
          value: "success",
        },
        {
          label: "默认按钮",
          value: "default",
        },
        {
          label: "警告按钮",
          value: "warning",
        },
        {
          label: "危险按钮",
          value: "danger",
        },
      ],
      defaultValue: "default",
    }),
  },
};
