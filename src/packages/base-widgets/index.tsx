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
  props: {},
};
