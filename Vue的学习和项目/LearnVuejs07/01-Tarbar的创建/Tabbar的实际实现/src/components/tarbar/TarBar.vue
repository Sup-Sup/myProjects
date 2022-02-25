<!--  -->
<template>
  <div id="tarbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TarBar",
};
</script>

<style scoped>
#tarbar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;

  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
  /* justify-content: space-around; */
}
</style>