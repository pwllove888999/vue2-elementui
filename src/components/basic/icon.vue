<template lang="html">
  <div class="icon">
    <el-row class="loading">
      <i class="el-icon-loading"></i>
    </el-row>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" class="el-icon-search">搜索</el-button>
    <el-row class="loading">
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-off"></i>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .loading
    position: absolute
    width: 100%
    text-align: left
    font-size: 24px
</style>
