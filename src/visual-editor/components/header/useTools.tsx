import { reactive } from "vue";
import {
  Upload,
  Download,
  Delete,
  Position,
  ChatLineSquare,
} from "@element-plus/icons-vue";
export const useTools = () => {
  // const state = reactive({
  // coverRadio:'current',
  // importJsonValue:''
  // })

  return [
    {
      title: "导入JSON",
      icon: Upload,
    },
    {
      title: "导出JSON",
      icon: Download,
    },
    {
      title: "清空页面",
      icon: Delete,
    },
    {
      title: "预览",
      icon: Position,
    },
    {
      title: "反馈",
      icon: ChatLineSquare,
      onClick: () => {
        window.open("https://github.com/hellowangziyi");
      },
    },
  ];
};
