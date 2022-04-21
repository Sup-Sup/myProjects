<template>
  <div>
      <h2>这是profile的页面</h2>
      <h2>{{query}}</h2>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'profile',
  computed: {
    query() {
      return this.$route.query
    }
  }
}
</script>

<style scoped>

</style>