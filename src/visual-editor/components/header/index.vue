<template>
  <el-row type="flex" class="header">
    <!-- 左侧logo start -->
    <el-col :span="8" class="flex items-center">
      <div class="logo"></div>
      <h3 class="font-semibold">Lowcode Marketing</h3>
    </el-col>
    <!-- 左侧logo end -->
    <!-- 中间 start -->
    <el-col :span="8" class="flex items-center">
      <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
        <div :class="[`w-1/${tools.length}`]">
          <div class="tool-item flex flex-col items-center cursor-pointer p-4">
            <el-icon>
              <component :is="toolItem.icon"></component>
            </el-icon>
            <div class="title">{{ toolItem.title }}</div>
          </div>
        </div>
      </template>
    </el-col>
    <!-- 中间 end -->
    <!-- 右边 start -->
    <el-col :span="8" class="right-tools flex flex-row-reverse items-center">
      <el-tooltip class="item" effect="dark" content="运行" placement="bottom">
        <el-button
          type="primary"
          :icon="VideoPlay"
          size="large"
          circle
          class="flex-shrink-0 !p-6px"
        />
      </el-tooltip>
    </el-col>
    <!-- 右边 end -->
  </el-row>
</template>

<script setup>
import { VideoPlay } from "@element-plus/icons-vue";
import { useTools } from "./useTools";

defineOptions({
  name: "PageHeader",
});

const tools = useTools();
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  .logo {
    width: 25%;
    height: 100%;
    background-image: url("@/assets/logo.jpeg");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .tool-item {
    .title {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .el-button {
    font-size: 22px;
  }

  .right-tools > * {
    margin-left: 8px;
  }
}
</style>
