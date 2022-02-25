

<template>
  <div>
    <h2>我是cpn的组件的标题</h2>
    <p>我是cpn的组件的内容，嘿嘿嘿</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>

// 导出 默认
export default {
  name: 'Cpn',
  data(){
    return {
      name: '熊猫 -- cpn组件的name'
    }
  }
}
</script>

<style>

</style>