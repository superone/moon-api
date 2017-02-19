<template>
<div>
    <div class="container">
        <page-header></page-header>
    </div>
    <div class="container">
        <page-main class="page-main"></page-main>
    </div>
    <div class="container">
        <page-footer></page-footer>
    </div>
</div>
</template>

<script>
    import pageHeader from "../components/header/index.vue"
    import pageFooter from "../components/footer/index.vue"
    import pageMain from "../components/pagemain/index.vue"

    export default {
        components :{
            pageHeader,
            pageMain,
            pageFooter
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