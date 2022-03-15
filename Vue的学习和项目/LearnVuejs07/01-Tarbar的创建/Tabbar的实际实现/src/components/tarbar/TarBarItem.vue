<!--  -->
<template>
  <div class="tarbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      isActive: true,
    }
  },
  computed: {
    isActive(){
      // 只有当前的path才和this.path 相同， 其他都不同  
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tarbar-item {
  /* 均等分 flex: 1; */
  flex: 1;
  text-align: center;
  font-size: 10px;
}
.tarbar-item img{
  margin-top: 5px;
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
}
</style>