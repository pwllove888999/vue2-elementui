<!--
  1.textarea 输入框可通过设置属性 resize = none 禁止拖动来调整容器大小
  2.textarea 输入框可通过设置属性 autosize = true 使容器适应文本高度
-->

<template lang="html">
  <div class="input">
    <div class="type">基础用法</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>{{input}}

    <div class="type">禁用状态</div>
    <el-input v-model="input1" placeholder="请输入内容" disabled></el-input>{{input1}}

    <div class="type">带 icon 的输入框</div>
    <el-input
      v-model="input2"
      placeholder="请输入内容"
      icon="search"
      :on-icon-click="handleIconClick">
    </el-input>{{input2}}

    <div class="type">文本域</div>
    <el-input
      type="textarea"
      :rows="2"
      v-model="textarea"
      resize="none"
      placeholder="请输入内容">
    </el-input>{{textarea}}

    <div class="type">可自适应文本高度的文本域</div>
    <el-input
      type="textarea"
      autosize
      v-model="textarea1"
      resize="none"
      placeholder="请输入内容">
    </el-input>{{textarea1}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      textarea: '',
      textarea1: ''
    }
  },
  methods: {
    handleIconClick() {
      console.log('icon-click')
    }
  }
}
</script>

<style lang="sass">
  .type
    margin-top: 30px
</style>
