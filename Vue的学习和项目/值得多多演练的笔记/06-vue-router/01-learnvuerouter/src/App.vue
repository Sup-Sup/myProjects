<template>
  <div id="app">
    <!-- exclude后边放的是vue组件中的name值,多个值时，逗号后不能加空格-->
    <keep-alive exclude="user,abort">
      <router-view></router-view>
    </keep-alive>
    <!-- replace相当于location.replace() 方法 -->
    <router-link to="/abort" tag="button" replace>详情页abort</router-link>
    <router-link :to="'/user/' + userId" replace>用户页 user</router-link>
    <!-- <button @click="userClick" >用户页 user</button> -->

    <router-link :to="{ path: '/profile', query: {name: 'chaoqi', height: 172} }" replace>profile页</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'he'
    }
  },
  methods: {
    // 对router-link的替换使用
    userClick() {
      // this.$router.push('/user')  this.$router是整个router main.js中的router
      this.$router.replace('/user')
    }
  }
}
</script>

<style>
/*  这里是处于活跃状态的路由  */
  .router-link-active {
    color: blueviolet;
  }
</style>