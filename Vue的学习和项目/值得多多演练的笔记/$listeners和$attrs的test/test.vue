<template>
  <div id="app">
      <span>这是父组件A</span>
      <p>****************************************</p>
      <child1
      :p-child1="child1"
      :p-child2="child2"
      p-say="hello"
      @test1="onTest1" 
      @test2="onTest2"> 
      </child1>
  </div>
</template>
<script>
import Child1 from './Child1.vue';
import Vue from '../../vue .js'
export default {
  data () {
      return {
          child1: '老大',
          child2: '老二'
      };
  },
  components: { Child1 },
  methods: {
      onTest1 () {
          console.log('test1 running...');
      },
      onTest2 () {
          console.log('test2 running');
      }
  }
};
</script>
