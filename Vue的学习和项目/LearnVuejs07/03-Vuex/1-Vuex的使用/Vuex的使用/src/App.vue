<template>
  <div id="app">
    <h2>----------App内容：modules 内容state : {{$store.state.a.name}}</h2>  
    <h2>----------App内容：modules 内容的getters：{{$store.getters.fullName}}</h2>
    <h2>----------App内容：modules 内容的getters：{{$store.getters.fullName2}}</h2>
    <h2>----------App内容：modules 内容的getters：{{$store.getters.fullName3}}</h2>
    <button @click="changeModulesA()">修改modulesA中的name</button>
    <h2>{{message}}</h2>
    <h2>----------App内容---------</h2>
    <h2>{{$store.state.counter}}</h2>

    <h2>----------App内容： mutations的相关信息 </h2>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <button @click="clickInfo()">修改信息</button>
    <h2>显示info：{{$store.state.info}}</h2>

    <h2>-------App内容：getters 相关信息</h2>
    <h2>{{$store.getters.squareCounter}}</h2>

    <h2>-----------App 内容： getters的相关信息</h2>
    <h2>{{$store.getters.higher}}</h2>
    <h2>经过处理的数组长度： {{$store.getters.higherLenght}}</h2>
    <h2>动态获取身高： {{$store.getters.getHigher(193)}}</h2>
    <h2>
      <button @click="add()">+</button>
      <button @click="sub()">-</button>
    </h2>

    <h2>-------Test.vue 内容</h2>
    <test />
  </div>
</template>

<script>
import Test from "./components/Test";
export default {
  name: "App",
  components: {
    Test,
  },
  data() {
    return {
      message: "你好哇，超琦",
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCounter(count) {
      // 1、普通的提交风格
      // this.$store.commit('incrementCounter',count)
      // 2、特殊的提交风格
      this.$store.commit({
        type: 'incrementCounter',
        count
      })
    },
    addStudent(){
      const stu = {id:3, name: 'alan', height:183};
      this.$store.commit("addStu",stu)
    },
    clickInfo(){
      // this.$store.commit('changeInfo')  谁调用aChangeInfo，谁能够得到返回的东西
      this.$store.dispatch('aChangeInfo','hello , this is payload from dispatch').then(res => {
        console.log('内部已经修改好信息了');
        console.log(res);
      })
    },
    changeModulesA(){
      this.$store.dispatch('aUpdateName')
    }
  },
};
</script>

<style>
</style>
