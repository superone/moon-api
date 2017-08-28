<template>
    <div class="main" id="main">
            <page-header></page-header>
            <div class="main-content clearfl">
                <left-bar></left-bar>
                <page-main class="page-main"></page-main>
            </div>
    </div>
</template>

<script>
    import pageHeader from "../components/header/index.vue";
    import pageMain from "../components/pagemain/index.vue";
    import leftBar from "../components/leftbar/index.vue";

    export default Vue.extend({
        components :{
            pageHeader,
            pageMain,
            //pageFooter,
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