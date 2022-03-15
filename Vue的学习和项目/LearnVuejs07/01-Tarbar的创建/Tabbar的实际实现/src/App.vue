<template>
  <div id="app">
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>

import MainTarBar from './components/mainTabBar/MainTabBar'
export default {
  name: "App",
  components: {
    MainTarBar
  },
};
</script>

<style>
/* 引用base.css文件 */
@import "./assets/css/base.css";
</style>
