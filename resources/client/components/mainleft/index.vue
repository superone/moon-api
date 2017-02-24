<template>
    <div class="code-edit code-left">
        <div class="cont">
            <component :is="currentView"></component>
        </div>
        <div class="cont edit">

        </div>
    </div>
</template>

<script>
    import routeTree from "./routetree"
    import assetTree from "./assettree"
    export default {
        components:{
            routeTree,
            assetTree
        },
        data () {
            return {
                msg: 'Hello World!',
                currentView : "routeTree"
            }
        },
        methods : {
            message( e ){
                console.log(e);
            },
            changeView ( view ){
                this.currentView = view;
            }
        }
    }
</script>

<style>
</style>