<!--
 * @Author: Everest
 * @Date: 2023-10-13 21:32:40
 * @LastEditors: Everest
 * @LastEditTime: 2023-10-20 21:57:30
 * @FilePath: /vite-demo/Users/wang/Documents/code/lowcode-marketing-H5/src/visual-editor/components/left-aside/index.vue
 * @Description: 
 * 
-->
<template>
  <el-collapse v-model="activeNames" @change="handleChange" class="left-aside">
    <template v-for="tabItem in tabs" :key="tabItem.name">
      <el-collapse-item :title="tabItem.name">
        <template #title>
          <div class="flex-row items-center justify-center collapse-item">
            <el-icon :size="26">
              <component :is="tabItem.icon" />
            </el-icon>
            {{ tabItem.label }}
          </div>
        </template>
        <component :is="tabItem.comp" v-bind="$attrs" />
      </el-collapse-item>
    </template>
  </el-collapse>
</template>

<script setup>
import components from "./components";

const tabs = Object.entries(components)
  .map(([name, component]) => {
    const { label, icon, order } = component;
    return { label, icon, name, order, comp: component };
  })
  .sort((a, b) => a.order - b.order);
console.log(tabs, "tabs");

const activeNames = ref(tabs[3].name);

const handleChange = () => {};
</script>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  padding: 5%;
  contain: layout;

  .collapse-item {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    [class^="el-icon"] {
      font-size: 20px;
      margin-right: 10px;
    }

    /* :hover {
      color: #ccccff;
    } */
  }

  :hover {
    color: #666699;
  }
}

.is-active .collapse-item {
  color: #666699;
}
</style>
