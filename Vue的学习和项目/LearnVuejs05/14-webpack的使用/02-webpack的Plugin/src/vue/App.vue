
<!-- 模板分离 -->

<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click='btnClick'>按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>  
    <!--  使用 -->
   </div>
</template>

<script>
import Cpn from './Cpn'  // 导入文件

export default {
  name: 'App',
  data(){
    return {
      message: '今天的晚霞应该很好看',
      name: '超琦'
    }
  },
  components: {
    Cpn   // 注册
  },
  methods: {
    btnClick(){
      console.log('组件单独领出来，搞开发');
    }
  }
}
</script>

<style>
  .title{
    color:skyblue;
  }
</style>