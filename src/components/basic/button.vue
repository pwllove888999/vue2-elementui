
<!--
  1. el-button type 包括：default, primary, text 三种基本类型
  2. el-button disabled 为 true 的时候，提供 plain 属性可以使其为简单样式
  3. el-button type 包括：success, warning, danger, info 四中颜色语义类型
-->
<template lang="html">
  <div class="button">
    <div class="type">基本用法</div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <div class="type">禁用状态</div>
    <el-button :plain="true" :disabled="true">主要按钮</el-button>
    <el-button type="primary" :disabled="true">主要按钮</el-button>
    <el-button type="text" :disabled="true">文字按钮</el-button>

    <div class="type">有颜色倾向语义</div>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" :plain="true">危险按钮</el-button>
    <el-button type="info" :plain="true">信息按钮</el-button>

    <div class="type">图标按钮</div>
    <el-button type="primary" icon="edit"></el-button>
    <el-button type="primary" icon="share"></el-button>
    <el-button type="primary" icon="delete"></el-button>
    <el-button type="primary" icon="search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>

    <div class="type">按钮组</div>
    <el-button-group>
      <el-button type="primary" icon="arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="edit"></el-button>
      <el-button type="primary" icon="share"></el-button>
      <el-button type="primary" icon="delete"></el-button>
    </el-button-group>

    <div class="type">加载中</div>
    <el-button type="primary" :loading="true">加载中</el-button>

    <div class="type">不同尺寸</div>
    <el-button type="primary" size="large" autofocus="true">大型按钮</el-button>
    <el-button type="primary">正常按钮</el-button>
    <el-button type="primary" size="small">小型按钮</el-button>
    <el-button type="primary" size="mini">超小按钮</el-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  .type
    margin: 20px
</style>
