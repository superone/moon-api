<template>
    <div class='tree'>
        <div class='tree-title'>
            <span>资源列表</span>
            <ol :class="{hide:!hasActive}">
                <li><a href="javascript:;" @click="addCase" class='tree-add-btn'>添加</a></li>
            </ol>
        </div>
        <div class='tree-cont'>
            <tree-node v-for="item in treeData" 
                       @on-active-change="onActiveChange"  
                       @on-inputting-change="onInputtingChange"  
                       @on-update-tree-data = "onUpdateTreeData"
                       @on-add-route="onAddRoute"
                       v-bind:tree-data="item" 
                       v-bind:active-node="activeNode" 
                       v-bind:inputting="inputting">
            </tree-node>
        </div>
    </div>
</template>

<script>
    import treeNode from "./items.vue"
    export default Vue.extend({
        components:{
            treeNode
        },
        data () {
            return {
                treeData : [],
                activeNode : '',
                hasActive : false,
                inputting : false
            }
        },
        mounted : function(){
            this.loadData();
        },
        methods : {
            loadData : function(){
                let me = this;
                $.get("/tree.json" , function( data ){
                    me.treeData = data;
                });
            },
            onActiveChange( val ){
                this.activeNode = val;
                this.hasActive = !!val;
            },
            onInputtingChange( val ){
                this.inputting = val;
            },
            onUpdateTreeData( val ){
                this.treeData = val;
            },
            onAddRoute( val ){
                var me = this;
                if( val ){
                    val.value = val.value.replace(/\/+/g,"/");
                    $.get("/tree.json", val , function( data ){
                        me.treeData = data;
                    });
                }
            },
            addCase(){
                //if(!this.hasActive) return;
                this.inputting = true;
            }
        }
    })
</script>

<style>
</style>