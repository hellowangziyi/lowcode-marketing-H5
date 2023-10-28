import { CSSProperties } from "vue";
import { VisualEditorProps } from "./visual-editor.props";
import { generateNanoid } from "@/visual-editor/utils";
import { useDotProp } from "@/hooks/useDotProp";

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
  /* 组件属性 */
  props?: Record<string, VisualEditorProps>;
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

export function createNewBlock(component: VisualEditorComponent) {
  return {
    _vid: `vid_${generateNanoid()}`,
    moduleName: component.moduleName,
    componentKey: component!.key,
    label: component!.label,
    adjustPosition: true,
    focus: false,
    styles: {
      display: "flex",
      justifyContent: "flex-start",
      paddingTop: "0",
      paddingRight: "0",
      paddingLeft: "0",
      paddingBottom: "0",
      tempPadding: "0",
    },
    hasResize: false,
    props: Object.entries(component.props || {}).reduce(
      (prev, [propName, propSchema]) => {
        const { propObj, prop } = useDotProp(prev, propName);
        if (propSchema.defaultValue) {
          propObj[prop] = prev[propName] = propSchema.defaultValue;
        }
        return prev;
      },
      {}
    ),
    draggable: component.draggable ?? true, // 是否可以拖拽
    showStyleConfig: component.showStyleConfig ?? true, // 是否宣示组件样式配置
    animations: [], // 动画集
    actions: [], // 动作合集
    events: component.events || [], // 事件集合
    model: {},
  };
}
