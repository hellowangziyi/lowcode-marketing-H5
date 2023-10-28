<template>
  <draggable
    v-model="list"
    class="dragArea"
    :class="{ isDrag }"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !isDrag ? 'flip-list' : null,
    }"
    :group="group"
    v-bind="{ ...dragOptions, ...$attrs }" 
    :item-key="itemKey"
    @start="isDrag = true"
    @end="isDrag = false"
  >
    <template #item="item">
      <div :class="{ 'item-drag': item.element.draggable }">
        <slot name="item" v-bind="item"></slot>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { useVModel } from "@vueuse/core";

defineOptions({
  name: "DraggableTransitionGroup",
});

const props = defineProps({
  moduleValue: {
    type: Array,
    default: () => [],
  },
  drag: { type: Boolean, default: false },
  itemKey: { type: String, default: "_vid" },
  group: { type: Object, default: () => ({ name: "components" }) },
  fallbackClass: String,
});

const emit = defineEmits(["update:moduleValue", "update:drag"]);

const list = useVModel(props, "moduleValue", emit); // 双向绑定 约等于v-bind
const isDrag = useVModel(props, "drag", emit);

const dragOptions = computed(() => ({
  animation: 200,
  disabled: false,
  scroll: true,
  ghostClass: "ghost",
}));
</script>

<style lang="scss" scoped></style>
