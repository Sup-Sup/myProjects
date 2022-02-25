<!--  -->
<template>
    <div>
        <h2>这是用户的界面</h2>
        <p>早上好哇，超琦</p>
        <p>{{$route.params.userId}}，数据跳转过来了</p>
        <p>用一下computed属性吧，方便些 -- {{userId}}</p>
    </div>
</template>

<script>
    export default {
        name:'User',
        computed: {
          userId(){
            return this.$route.params.userId
          }
        },
        created(){
          console.log('User 被创建');
        }
    }

</script>

<style scoped>

</style>