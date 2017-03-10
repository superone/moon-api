<template>
    <div class="code-edit code-left" :style="getPanleStyle" :class="[getMenuToggle?'open':'close']">
        <div class="cont">
            <component :is="getCurrentMenu"></component>
        </div>
        <a class="card-bar" 
            @dragstart="panleDrag($event)" 
            @drag="panleDrag($event)" 
            @dragend="panleDrag($event)" 
            href="javascript:;">
        </a>
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
                open : true,
                panelWidth : 300,
                startPanelWidth : 300,
                cardBarPageX : 0,
                lastPageX : 0
            }
        },
        computed : {
            getCurrentMenu : function(){
                return this.$store.getters.getCurrentMenu
            },
            getMenuToggle : function(){
                return this.$store.getters.getMenuToggle
            },
            getPanleStyle(){
                return "width:"+this.panelWidth + "px;";
            }
        },
        methods : {
            panleDrag(e){
                var type = e.type;
                var pageX = e.pageX;
                var cha = 0;
                if( type === "dragstart"){
                    //console.log("start");
                    this.cardBarPageX = pageX;
                    this.lastPageX = pageX;
                }else if( type === "drag"){
                    //console.log(this.cardBarPageX + "/" + pageX + "|" + (this.panelWidth) + "/" + (this.lastPageX - pageX));
                    if( this.lastPageX != pageX && pageX > 0){
                        this.panelWidth = this.panelWidth - (this.lastPageX - pageX);
                    }
                    this.lastPageX = pageX;
                }else if( type === "dragend"){
                    //console.log("end");
                    this.cardBarPageX = 0;                    
                    this.lastPageX = 0;
                }
            }
        }
        
    })
</script>

<style>

 div.code-left.close{
     display:none;
 }
</style>