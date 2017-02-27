<template>
    <div class="tree-node" v-bind:style="nodeStyle" ref="root">
        <ul>
            <li>
                <span :class="{active : localActiveNode == treeData.nodeId }">
                    <a class="node-icon" 
                       :class="[open?'jian':'']" 
                       href="javascript:;" 
                       @click='toggle'>
                    </a>
                    <a class='node-name' @click.stop="selectNode(treeData)"  href='javascript:;'>{{ treeData.menuName }}</a>
                </span>
                <items v-for="item in treeData.child" 
                       @on-active-change="onActiveChange" 
                       @on-inputting-change="onInputtingChange"
                       @on-update-tree-data = "onUpdateTreeData"
                       @on-add-route="onAddRoute"
                       :tree-data="item" 
                       :active-node="activeNode" 
                       :inputting="inputting">
                </items>
                <div class="tree-node" :class="{hide:!isInputting}">
                    <input class='new-input' @blur="addInputBlur($event)" type="text"/>
                    <a class="cancel-input" @click="canelAdd" href="javascript:;">X</a>
                </div>
            </li>
        </ul>
        <div class="tree-line"></div>
    </div>
</template>

<script>
    export default Vue.extend({
        name : "items",
        props: ['treeData' , 'activeNode' , 'inputting'],
        components: {},
        data() {
            return {
                open: false,
                nodeStyle : "height:25px;",
                localActiveNode : this.activeNode,
                localInputting : this.inputting
            }
        },
        computed :{
            isFolder(){
                return this.treeData.child && this.treeData.child.length
            },
            isActive(){
                return  this.treeData.nodeId == this.localActiveNode;
            },
            isInputting(){
                console.log("isInput");
                return (this.localActiveNode == this.treeData.nodeId && this.localInputting)
            }
        },
        watch: {
            activeNode(val) {
                this.localActiveNode = val;
            },
            localActiveNode(val){
                this.$emit("on-active-change",val);
            },
            inputting( val ){
                this.localInputting = val;
            },
            localInputting( val ){
                this.$emit("on-inputting-change" , val)
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
            },
            onInputtingChange( val ){
                this.localInputting = val;
                //this.$emit("on-active-change",val);
            },
            onUpdateTreeData( val ){
                this.$emit("on-update-tree-data",val);
            },
            onAddRoute( val ){
                val = {
                    "value" : this.treeData.route + val.value
                }
                this.$emit("on-add-route",val);
            },
            canelAdd(){
                this.localInputting = false;
            },
            addInputBlur( e ){
                var me = this;
                var el = e.target;
                var value = $(el).val();
                value = this.treeData.route + "/" + value;
                this.$emit("on-add-route",{
                    "value" : value
                });
                this.localInputting = false;
            }
        }
    })
</script>

<style>
</style>