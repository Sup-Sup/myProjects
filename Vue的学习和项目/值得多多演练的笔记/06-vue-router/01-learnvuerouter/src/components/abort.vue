<!--  -->
<template>
    <div>
        <h2>abort页的内容</h2>
        <router-link to="/abort/abortMessage">abortMessage信息</router-link>
        <router-link to="/abort/abortNews">abortNews</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'abort',
    }

</script>

<style scoped>

</style>