<template>
  <div class="simulator-container">
    <div class="simulator-editor">
      <div class="simulator-editor-content">
        <div>111</div>
        <DraggableTransitionGroup
          v-model:drag="drag"
          v-model="blocks"
          class="!min-h-680px"
          draggable=".item-drag"
        >
          <template #item="{ element: outElement }">
            <div class="list-group-item" :data-label="outElement.label">
              <CompRender
                :key="outElement._vid"
                :element="outElement"
                :style="{
                  pointerEvents: Object.keys(outElement.props?.slots || {})
                    .length
                    ? 'auto'
                    : 'none',
                }"
              >
                <!-- <template
                  v-for="(value, slotKey) in outElement.props?.slot"
                ></template> -->
              </CompRender>
            </div>
          </template>
        </DraggableTransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SimulatorEditor",
});
const drag = ref(false);
const blocks = reactive({});
</script>

<style lang="scss" scoped>
.simulator-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 460px;
  align-items: center;
  justify-content: center;
}

.simulator-editor {
  width: 900px;
  height: 100%;
  min-width: 900px;
  padding: 0 200px 0;
  overflow: hidden;
  background-color: #fafafa;

  &-content {
    min-height: 100%;
    transform: translate(0); // GPU加速？
    box-shadow: 0 8px 12px #ebedf0;
  }
}
</style>
