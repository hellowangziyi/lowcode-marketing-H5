import { CSSProperties } from "vue";
import { VisualEditorProps } from "./visual-editor.props";

/**
 * @description 单个组件注册规则
 **/
export type VisualEditorComponent = {
  /* 组件name */
  key: string;
  /* 组件所属模块名称 */
  moduleName: string;
  /* 组件唯一id */
  _vid?: string;
  /* 组件中文名 */
  label: string;
  /* 预览函数 */
  preview: () => JSX.Element;
  /* 渲染函数 */
  render: (data: {
    props: any;
    model: any;
    styles: CSSProperties;
  }) => JSX.Element;
  /* 是否可以被拖拽 */
  draggable?: boolean;
};

export type ComponentModules = {
  baseWidgets: VisualEditorComponent[]; // 基础组件
  containerComponents: VisualEditorComponent[]; // 容器组件
  propertyComponents: VisualEditorComponent[]; // 资产组件
  productComponents: VisualEditorComponent[]; // 商品组件
  pictureComponents: VisualEditorComponent[]; // 图片组件
};

export function createVisualEditorConfig() {
  const componentModules: ComponentModules = {
    baseWidgets: [],
    containerComponents: [],
    propertyComponents: [],
    pictureComponents: [],
    productComponents: [],
  };
  const componentMap: Record<string, VisualEditorComponent> = {};
  return {
    componentModules,
    componentMap,
    registry: (
      moduleName: keyof ComponentModules,
      key: string,
      component: VisualEditorComponent
    ) => {
      const comp = { ...component, key, moduleName };
      componentModules[moduleName].push(comp);
      componentMap[key] = comp;
    },
  };
}
