<!--  -->
<template>
  <div>
    <h2>进行vue-router的测试</h2>
    <h2>{{userId}}, 你好呀</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    userId() {
      // 获取动态路由 这个下方的params后跟的就是所有的动态路由名
      return this.$route.params.userId
    }
  }
};
</script>

<style scoped>
</style>