<template>
    <div class="page-main">
        <main-left></main-left>
        <main-content></main-content>
    </div>
</template>

<script>
    import mainLeft from "../mainleft/index.vue"
    import mainContent from "../maincontent/index.vue"
    
    const pagemain = Vue.extend({
        //router,
        components:{
            mainLeft,
            mainContent
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