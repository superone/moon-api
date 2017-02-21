<template>
    <div class="left-bar">
        <ul>
            <li v-for="item in menus" v-bind:class="[{active:item.index==current},item.cls]">
                <a href="javascript:;" v-on:click="menuHandler(item , $event)" ref="item.ref">
                    <img v-bind:title="item.title" v-bind:src="item.imgsrc"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Menus from "./data/menu-config.js"
    export default {
        data () {
            return {
                current : 3,
                menus : Menus
            }
        },
        methods : {
            menuHandler( item , e){
                console.log(this.$refs.config);
                if(item.index > 1){
                    this.current = item.index;
                }
            }
        }
    }
</script>

<style>
</style>