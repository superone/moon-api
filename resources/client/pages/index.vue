<template>
    <div id="main">
        <div class="container">
            <page-header></page-header>
        </div>
        <div class="container">
            <div class="main-content">
                <page-main class="page-main"></page-main>
            </div>
            <left-bar></left-bar>
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
    import leftBar from "../components/leftbar/index.vue"

    export default Vue.extend({
        components :{
            pageHeader,
            pageMain,
            pageFooter,
            leftBar
        },
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    })
</script>

<style>
</style>