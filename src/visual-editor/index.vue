<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside></el-aside>
      <el-main>
        <div>{{ drag ? "拖拽中" : "拖拽停止" }}</div>
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
  </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive, defineComponent } from "vue";
import draggable from "vuedraggable";

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

<style lang="scss" scoped></style>
