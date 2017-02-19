<template>
    <div class="code-edit code-left">
        <div class="cont">
            <route-tree></route-tree>
        </div>
        <div class="cont edit">

        </div>
    </div>
</template>

<script>
    import routeTree from "../routetree"
    export default {
        components:{
            routeTree
        },
        data () {
            return {
                msg: 'Hello World!'
            }
        },
        methods : {
            message( e ){
                console.log(e);
            }
        }
    }
</script>

<style>
</style>