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
      <div>11</div>
    </el-col>
    <!-- 中间 end -->
    <!-- 右边 start -->
    <el-col :span="8" class="right-tools flex flex-row-reverse items-center">
      <el-button
        type="primary"
        :icon="VideoPlay"
        size="large"
        circle
        class="flex-shrink-0 !p-6px"
        >click我牛逼嘛</el-button
      >
    </el-col>
    <!-- 右边 end -->
  </el-row>
</template>

<script setup>
import { VideoPlay } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}

.logo {
  width: 25%;
  height: 100%;
  background-image: url("@/assets/logo.jpeg");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
