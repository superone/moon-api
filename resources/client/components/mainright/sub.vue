<template>
    <div class="edit-space router-edit" :class="{'hide':(routerIndex!==currentRouter)}" :id="tabItem.id">
        <div class="method-tab">
            <a href="javascript:;"  class="method-btn more-add">+</a>
            <a href="javascript:;" 
                v-for="(k,index) in tabItem.titleTabs" 
                @click="changeMethod(index)"
                @dblclick = "doubleClick($event)"
                :class="{'method-btn':true,'active':(currentTab==index)}">
                {{k}}
            </a>
        </div> 
        <div class="route-edit-main">
            <div class="edit-title">
                <ul>
                    <li v-for = "(k , index) in tabItem.tabs"
                        :class = "{'first':index===0 , 'active':currentEdit===index}"
                    >
                        <a @click = "changeTab(index)" href="javascript:;">{{k}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default Vue.extend({
        props : ["isFull","tabItem","currentRouter","routerIndex"],
        data () {
            return {
                localIsFull : this.isFull,
                currentTab : 0,
                currentEdit : 0
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
                this.$data.currentTab = index;
            },
            changeTab( index ){
                this.$data.currentEdit = index;
            },
            doubleClick( e ){
                let element = e.currentTarget;
                if (element.classList.contains('active')) {
                    this.localIsFull = !this.localIsFull;
                }
            }
        }
    })
</script>

<style>
</style>