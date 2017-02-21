<template>
    <div class="page-main">
        <main-left></main-left>
        <main-right></main-right>
        <left-bar></left-bar>
    </div>
</template>

<script>
    import mainLeft from "../mainleft/index.vue"
    import mainRight from "../mainright/index.vue"
    import leftBar from "../leftbar/index.vue"
    export default {
        components:{
            mainLeft,
            mainRight,
            leftBar
        },
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
</style>