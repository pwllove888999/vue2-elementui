<!--
  1. el-checkbox-group 绑定的值是一个数组 且 数组中的值等于其选项中的值，那么该选项将会被选中
  2. el-checkbox-group change 事件和 el-checkbox change 事件接收的第一个参数是不同的
-->

<template lang="html">
  <div class="checkbox">
    <div class="type">基础用法</div>
    <el-checkbox v-model="checked">备选项</el-checkbox>

    <div class="type">禁用状态</div>
    <el-checkbox v-model="checked1" >备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>

    <div class="type">多选框组</div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <div class="type">indeterminate 状态</div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city">{{city}}</el-checkbox>
    </el-checkbox-group>

  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A'],
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
      checkAll: false
    }
  },
  methods: {
    handleCheckedCitiesChange(value) {
      this.checkedCities = value
      if (this.checkedCities.length === this.cities.length) {
        this.isIndeterminate = false
        this.checkAll = true
      } else if (this.checkedCities.length > 0) {
        this.isIndeterminate = true
      } else {
        this.isIndeterminate = false
        this.checkAll = false
      }
    },
    handleCheckAllChange(event) {
      this.checkedCities = event.target.checked ? this.cities : []
      this.isIndeterminate = false
    }
  }
}
</script>

<style lang="sass" scoped>
  .type
    margin-top: 30px

</style>
