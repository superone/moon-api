<template>
    <div class="left-bar">
        <ul>
            <li v-for="item in menus" v-bind:class="[{active:item.index==current},item.cls]">
                <a href="javascript:;" v-on:click="tabHandle(item)" ref="item.ref">
                    <img v-bind:title="item.title" v-bind:src="item.imgsrc"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Menus from "./data/menu-config.js"
    export default Vue.extend({
        data () {
            return {
                current : 3,
                menus : Menus
            }
        },
        methods : {
            tabHandle : function(item){
                if(item.index>2){
                    this.current = item.index;
                    if(item.action){
                        this.$store.dispatch("setMenuTree" , item);
                        this.$store.dispatch("setMenuToggle" , true);
                    }
                }else if( item.index == 1){
                    this.$store.dispatch("setMenuToggle");
                }
                this.menus[0].imgsrc = this.$store.getters.getMenuToggle ? 
                    "/images/icon/double-left-chevron.png"
                    : "/images/icon/double-right-chevron.png";
            }
        }
    })
</script>

<style>
</style>