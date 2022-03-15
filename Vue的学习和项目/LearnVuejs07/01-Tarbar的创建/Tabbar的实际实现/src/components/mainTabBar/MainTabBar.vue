<!--  -->
<template>
  <div>
    <router-view></router-view>

    <tar-bar>
      <!-- 使用组件TarBarItem，去代替TarBar中的插槽 -->
      <tar-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/Tarbar/首页.svg" alt="首页图片" title="首页的图片" />
        <img slot="item-icon-active" src="~assets/img/Tarbar/首页a.svg" alt />
        <div slot="item-text">首页</div>
      </tar-bar-item>

      <tar-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/Tarbar/分类.svg" alt="分类图片" title="分类的图片" />
        <img slot="item-icon-active" src="~assets/img/Tarbar/分类a.svg" alt />
        <div slot="item-text">分类</div>
      </tar-bar-item>

      <tar-bar-item path="/cart" activeColor="yellow">
        <img slot="item-icon" src="~assets/img/Tarbar/购物车.svg" alt="购物车图片" title="购物车的图片" />
        <img slot="item-icon-active" src="~assets/img/Tarbar/购物车a.svg" alt />
        <div slot="item-text">购物车</div>
      </tar-bar-item>

      <tar-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/Tarbar/个人中心.svg" alt="个人中心图片" title="个人中心的图片" />
        <img slot="item-icon-active" src="~assets/img/Tarbar/个人中心a.svg" alt />
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "components/tarbar/TarBar";
import TarBarItem from "../tarbar/TarBarItem";
export default {
  name: "MainTabBar",
  components: {
    TarBar,
    TarBarItem
  }
};
</script>

<style scoped>
</style>