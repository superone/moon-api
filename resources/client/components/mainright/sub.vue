<template>
    <div class="edit-space router-edit" :class="{'hide':(routerIndex!==currentRouter)}" :id="tabItem.id">
        <div class="method-tab">
            <a href="javascript:;" 
                v-for="(k,index) in tabItem.titleTabs" 
                @click="changeMethod(index)"
                @dblclick = "doubleClick($event)"
                :class="{'method-btn':true,'active':(currentMethod==index)}">
                {{k}}
            </a>
            <a href="javascript:;"  class="method-btn more-add">+</a>
        </div> 
        <div class="route-edit-main">
            <router-editor 
                v-for="(k,index) in tabItem.tabs"
                v-bind:item = "tabItem" 
                v-bind:tab-index = "index"
                v-bind:current-method = "currentMethod">
            </router-editor>
        </div>
    </div>
</template>

<script>
    import * as routerEditor from "./routerEditor";

    export default Vue.extend({
        props : ["isFull","tabItem","currentRouter","routerIndex"],
        components : {
            routerEditor
        },
        data () {
            return {
                localIsFull : this.isFull,
                currentMethod : 0,
                currentEdit : 0
            }
        },

        computed: {
            curTabCurSub: function( index ) {
                return this.currentSub[index];
            }
        },
        
        created: function () {
            this.$data.current = "initData";
        },

        watch :{
            current( newV , oldV){
                if(typeof this[newV] === "function" ){
                    this[newV].call( this );
                }
            },
            localIsFull( val ){
                this.$emit("on-isfull-change",val);
            }
        },

        methods : {
            initData(){
                this.$data.i += 1;
            },
            changeMethod( index ){
                this.$data.currentMethod = index;
            },
            doubleClick( e ){
                let element = e.currentTarget;
                if (element.classList.contains('active')) {
                    this.localIsFull = !this.localIsFull;
                }
            },
            changeSubTab( index , i ){
                this.$set( this.currentSub , index , i);
                //this.currentSub[index] = i;
            }
        }
    })
</script>

<style>
</style>