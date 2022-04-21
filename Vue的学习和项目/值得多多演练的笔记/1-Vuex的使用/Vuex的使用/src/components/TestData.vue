<!--  -->
<template>
  <div>
    <h2>TestData的组件内容</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">++</button>
    <h2> 双倍counter  ----  {{$store.getters.doubleCouter}}</h2>
    <h2>vuex中，getters中的嵌套 ----- {{$store.getters.useDoubleCouter}}</h2>
    <h2>输入一个，或者从后端获取到一个元素，对该元素进行一定处理{{$store.getters.inputCounter(5)}}</h2>
    <button @click="addStu">添加学生</button>
    <h3>{{$store.state}}</h3>
    <button @click="updateInfo">跟新信息</button>
  </div>
</template>

<script>
export default {
  name: "TestData",
  data() {
    return {
      data: this.$store.counter,
    }
  },
  methods: {
    add() {
      this.$store.commit('addCounter')
    },
    addStu() {
      this.$store.commit('addStudents',{
        age: 12, 
        name: 'lisa'
      })
    },
    updateInfo() {
      // this.$store.dispatch('AupdateInfo', {
      //   message: 'hello, world ---------- 在actions中进行异步操作',
      //   success: () =>{
      //     console.log('已执行');
      //   }
      // })

      this.$store.dispatch('AupdateInfo', {
        message: 'hello, world ---------- 在actions中进行异步操作'
      }).then(res => {
        console.log('内部完成了更新');
        console.log(res);
      })
    }
  }
};
</script>

<style scoped>
</style>