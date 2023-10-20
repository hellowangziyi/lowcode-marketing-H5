<!--
 * @Author: Everest
 * @Date: 2023-10-02 20:53:13
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-20 22:11:13
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/visual-editor/index.vue
 * @Description: 
 * 
-->
<template>
  <el-container>
    <el-header height="80px" class="flex items-center shadow-md">
      <!-- 顶部start -->
      <Header></Header>
      <!-- 顶部end -->
    </el-header>
    <el-container class="layout-container">
      <el-aside class="shadow-sm">
        <!-- 左侧组件start -->
        <LeftAside></LeftAside>
        <!-- 左侧组件end -->
      </el-aside>
      <el-main>
        <!-- 中间模拟器start -->
        <SimulatorEditor></SimulatorEditor>
        <!-- 中间模拟器end -->
        <!-- 右侧属性面板start -->
        <RightAttributePanel></RightAttributePanel>
        <!-- 右侧属性面板end -->
      </el-main>
    </el-container>
  </el-container>
  <!-- <section class="decoration-edit">
    <section class="left">
      <div class="group">
        <draggable></draggable>
      </div>
    </section>
  </section>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside></el-aside>
      <el-main>
        <div>{{ drag ? "拖拽中" : "拖拽停止" }}</div>
        <el-button type="primary">Primary</el-button>
        <draggable
          v-model="myArray"
          group="people"
          @start="onStart"
          @end="onEnd"
          item-key="id"
        >
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable>
      </el-main>
    </el-container>
  </el-container> -->
</template>

<script lang="ts" setup>
import { ref, reactive, defineComponent } from "vue";
import draggable from "vuedraggable";
import Header from "./components/header/index.vue";
import LeftAside from "./components/left-aside/index.vue";
import RightAttributePanel from "./components/right-attribute-panel/index.vue";
import SimulatorEditor from "./components/simulator-editor/index.vue";

let drag = ref(false);
let myArray = reactive([
  { id: 1, name: "www.itxst.com（不允许停靠）" },
  { id: 2, name: "www.jd.com" },
  { id: 3, name: "www.baidu.com" },
  { id: 5, name: "www.google.com" },
  { id: 4, name: "www.taobao.com（不允许拖拽）" },
]);

function onStart() {
  drag.value = true;
}

function onEnd() {
  drag.value = false;
}
</script>

<style lang="scss" scoped>
.el-header {
  position: relative;
  z-index: 99;
  background-color: white;
}

.el-main {
}

.layout-container {
  height: calc(100vh - 80px);
}
</style>
