<template>
    <div class="page-main">
        <main-left></main-left>
        <main-right></main-right>
    </div>
</template>

<script>
    import mainLeft from "../mainleft/index.vue"
    import mainRight from "../mainright/index.vue"
    
    const pagemain = Vue.extend({
        //router,
        components:{
            mainLeft,
            mainRight
        },
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    })

    export default pagemain
</script>

<style>
</style>