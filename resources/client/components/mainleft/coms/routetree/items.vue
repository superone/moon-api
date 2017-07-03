<template>
    <div class="tree-node" v-bind:style="nodeStyle" ref="root">
        <ul>
            <li>
                <span :class="{active : localActiveNode == treeData.nodeId }">
                    <a  class="node-icon" 
                        href="javascript:;" 
                        :class="{jian : open , folder : treeData.method == '' , route : treeData.method != '' }" 
                        @click='toggle'>
                    </a>
                    <a class='node-name' @click.stop="selectNode(treeData)"  href='javascript:;'>
                        <ins :class="treeData.method" v-show="treeData.method">{{treeData.method}}</ins>
                        {{ treeData.route }}
                        <i>({{ treeData.menuName }})</i>
                    </a>
                </span>
                <items v-for="item in treeData.child" @on-active-change="onActiveChange" :tree-data="item" :active-node="activeNode"></items>
            </li>
        </ul>
        <div class="tree-line"></div>
    </div>
</template>

<script>
    export default Vue.extend({
        name : "items",
        props: ['treeData' , 'activeNode'],
        components: {},
        data() {
            return {
                open: false,
                nodeStyle : "height:25px;",
                localActiveNode : this.activeNode
            }
        },
        computed :{
            isFolder(){
                return this.treeData.child && this.treeData.child.length
            },
            isActive(){
                return  this.treeData.nodeId == this.localActiveNode;
            }
        },
        watch: {
            activeNode(val) {
                this.localActiveNode = val;
            },
            localActiveNode(val){
                this.$emit("on-active-change",val);
            }
        },
        methods: {
            toggle() {
                if( this.isFolder ) {
                    this.open = !this.open
                    this.nodeStyle = this.open ? "height:auto" : "height:25px"
                }
            },
            selectNode(node){
                this.localActiveNode = node.nodeId;
            },
            onActiveChange( val ){
                this.localActiveNode = val;
                //this.$emit("on-active-change",val);
            }
        }
    })
</script>

<style>
</style>