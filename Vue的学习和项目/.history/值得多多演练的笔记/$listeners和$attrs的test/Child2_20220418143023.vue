<template>
    <div class="child-2">
        <span>这是孙子组件C</span>
        <p>in child2:</p>
        <p>props: {{pChild2}}</p>
        <p>$attrs: {{$attrs}}</p>
        <hr>
    </div>
</template>
<script>
export default {
    props: ['pChild2'],
    data () {
        return {};
    },
    inheritAttrs: false,
    mounted () {
        this.$emit('test2');
    }
};
</script>
