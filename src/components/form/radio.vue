
<!--
  1. el-radio-group change 事件 接受组中改变后的值作为参数
-->
<template lang="html">
  <div class="radio">
    <div class="type">基础用法</div>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>

    <div class="type">禁用状态</div>
    <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>

    <div class="type">单选框组</div>
    <el-radio-group v-model="radio2" :change="radioLabelChange(radio2)">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>

    <div class="type">按钮样式</div>
    <el-radio-group v-model="radio3.value">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京" :disabled="radio3.isdiabled"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: 6,
      radio3: {
        value: '广州',
        isdiabled: true
      }
    }
  },
  methods: {
    radioLabelChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="sass">
  .type
    margin-top: 20px
</style>
