<!--  -->
<template>
    <div>
        <p>profile组件在此，休得放肆</p>
        <p>{{$route.query}}</p>
    </div>
</template>

<script>
    export default {
        name:'Profile',
        created(){
          console.log('Profile 被创建');
        },
        destroyed(){
          console.log('Profile 被销毁');
        }
    }

</script>

<style scoped>

</style>