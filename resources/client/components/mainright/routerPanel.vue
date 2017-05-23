<template>
    <div class="edit-space router-edit" :class="{'hide':(routerIndex!==currentRouter)}" :id="routerData.id">
        <div class="method-tab">
            <a href="javascript:;" 
                v-for="(k,index) in routerData.methodTabs" 
                @click="changeMethod(index)"
                @dblclick = "doubleClick($event)"
                :class="{'method-btn':true,'active':(currentMethod==index)}">
                {{k.method}}
            </a>
            <a href="javascript:;"  class="method-btn more-add">+</a>
        </div> 
        <div class="route-edit-main">
            <router-editor
                v-for="(item,index) in routerData.methodTabs"
                v-bind:item = "item" 
                v-bind:tab-index = "index"
                v-bind:current-method = "currentMethod">
            </router-editor>
        </div>
    </div>
</template>

<script>
    import * as routerEditor from "./routerEditor";
    export default Vue.extend({
        components:{
            routerEditor
        },
        props : ["routerData","currentRouter","routerIndex"],
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
            }
        }
    })
</script>

<style>
</style>