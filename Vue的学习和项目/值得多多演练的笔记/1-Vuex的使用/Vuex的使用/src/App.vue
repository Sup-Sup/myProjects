<!--  -->
<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>

    <router-view></router-view>
    <router-link to="/Test">Test组件</router-link>
    <router-link to="/TestData">TestData组件</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style >
</style>