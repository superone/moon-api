<template>
    <div class="code-edit code-left" :class="[getMenuToggle?'open':'close']">
        <div class="cont">
            <component :is="getCurrentMenu"></component>
        </div>
        <div class="cont edit">

        </div>
    </div>
</template>

<script>
    import routeTree from "./coms/routetree"
    import assetTree from "./coms/assettree"

    export default Vue.extend({
        components:{
            routeTree,
            assetTree
        },
        data () {
            return {
                msg: 'Hello World!',
                open : true
            }
        },
        computed : Vuex.mapGetters([
            'getCurrentMenu',
            'getMenuToggle'
        ])
        
    })
</script>

<style>

 div.code-left.close{
     width:0px;
 }
</style>