<template>
    <div class="tree-node" v-bind:style="nodeStyle" ref="root">
        <ul>
            <li>
                <span class="">
                    <a class="node-icon" 
                        :class="[open?'jian':'']" 
                        href="javascript:;" 
                        @click='toggle'>
                    </a>
                    <a class='node-name' href='javascript:;'>{{ treeData.menuName }}</a>
                </span>
                <items v-for="item in treeData.child" v-bind:tree-data="item"></items>
            </li>
        </ul>
        <div class="tree-line"></div>
    </div>
</template>

<script>
    export default Vue.extend({
        name : "items",
        props: ['treeData'],
        components: {},
        data() {
            return {
                open: false,
                nodeStyle : "height:25px;"
            }
        },
        computed :{
            isFolder(){
                return this.treeData.child && this.treeData.child.length
            }
        },
        methods: {
            toggle() {
                console.log(this);
                if( this.isFolder ) {
                    this.open = !this.open
                    this.nodeStyle = this.open ? "height:auto" : "height:25px"
                }
            }
        }
    })
</script>

<style>
</style>