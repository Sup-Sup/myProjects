<!--  -->
<template>
    <div>
        <h2>----------</h2>
        <h2>This is test.vue </h2>
        <h2>Test组件中的数据操作：{{$store.state.counter}}</h2>
        <h2>---------</h2>
        <h2>{{$store.state.a.name}}</h2>
        <h2 @click="look">看看modulesA</h2>
        <button @click="changeName">修改名字</button>
        <h2>{{$store.getters.fullname2}}</h2>
        <button @click="sChangeName">异步修改名字</button>
    </div>
</template>

<script>
    export default {
        name:'Test',
        methods: {
          look() {
            console.log(this.$store.state.a);
          },
          changeName() {
            this.$store.commit('changeName', '晁盖')
          },
          sChangeName() {
            this.$store.dispatch('sChangeName', '武松').then(res => {
              console.log(res);
            })
          }
        }
    }

</script>

<style scoped>

</style>