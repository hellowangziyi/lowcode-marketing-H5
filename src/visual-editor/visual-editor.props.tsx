export enum VisualEditorPropsType {
  /** 输入框 **/
  input = "input",
  /** 数字输入框 **/
  inputNumber = "InputNumber",
  /** 颜色选择器 **/
  color = "color",
  /** 下拉选择器 **/
  select = "select",
  /** 表格 **/
  table = "table",
  /** 开关 **/
  switch = "switch",
  /** 模型绑定选择器 **/
  modelBind = "ModelBind",
  /** 可拖拽项 **/
  crossSortable = "CrossSortable",
  /** 日期选择器 **/
  datePicker = "DatePicker",
  /** 单选框 **/
  radio = "Radio",
  /** 标签栏 **/
  tabs = "Tabs",
}

export type VisualEditorProps = {
  type: VisualEditorPropsType;
  /** 表单项标签名称 **/
  label: string;
  /** 表单项提示说明 **/
  tips?: string;
  /** 表单域标签位置 **/
  labelPosition?: string;
  /** 默认值 **/
  defaultValue?: any;
  types?: any;
} & {
  /** 可选项 **/
  options?: VisualEditorSelectOptions;
  /** 是否可以多选 **/
  multiple?: boolean;
  /** 项属性配置 **/
  showItemPropsConfig?: boolean;
} & {
  max?: number;
  min?: number;
} & {
  table?: any;
};

/* select */
export type VisualEditorSelectOptions = {
  label: string;
  value: string | number | boolean | object;
  [prop: string]: any; // 表示对象可以添加任意类型的任意属性
}[];

interface EditorSeletorProp {
  label: string;
  options: VisualEditorSelectOptions;
  defaultValue?: any;
  multiple?: boolean;
  tips?: string;
}

export function createEditorSelectProp({
  label,
  options,
  defaultValue,
  tips,
  multiple,
}: EditorSeletorProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.select,
    label,
    defaultValue,
    tips,
    options,
    multiple,
  };
}

/* input */
interface EditorInputProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  types?: any;
}

export function createEditorInputProp({
  label,
  defaultValue,
  tips,
  types,
}: EditorInputProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.input,
    label,
    tips,
    defaultValue,
    types,
  };
}
