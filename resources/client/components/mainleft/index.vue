<template>
    <div class="code-edit code-left" :class="[open?'open':'close']">
    <a href="javascript:;" @click="alerttxt">tage</a>
        <div class="cont">
            <component :is="currentView"></component>
        </div>
        <div class="cont edit">

        </div>
    </div>
</template>

<script>
    import routeTree from "./coms/routetree"
    import assetTree from "./coms/assettree"
    import actions from "../../vuex/home/actions"
    import Vuex from 'vuex'
    export default {
        vuex: {
            actions: {
                alerttxt: actions.alerttxt
            }
        },
        components:{
            routeTree,
            assetTree
        },
        data () {
            return {
                msg: 'Hello World!',
                currentView : "routeTree",
                open : true
            }
        }
        
    }
</script>

<style>

 div.code-left.close{
     width:0px;
 }
</style>