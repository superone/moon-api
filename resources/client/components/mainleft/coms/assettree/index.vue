<template>
    <div class='tree'>
        <div class='tree-title'>资源列表</div>
        <div class='tree-cont'>
            <tree-node v-for="item in treeData" v-bind:tree-data="item"></tree-node>
            <!--<div class="tree-node">
                <ul>
                    <li>
                        <span class="checked">
                            <a class="node-icon jian" href="javascript:;"></a>
                            <a class='node-name' href='javascript:;'>/(root)</a>
                        </span>
                        <div class="tree-node">
                            <ul>
                                <li>
                                    <span>
                                        <a class="node-icon jian" href="javascript:;"></a>
                                        <a class='node-name' href='javascript:;'>获取用户信息api1</a>
                                        <span class="node-pre-line"></span>
                                    </span>
                                    <div class="tree-node">
                                        <ul>
                                            <li>
                                                <span>
                                                    <a class="node-icon jian" href="javascript:;"></a>
                                                    <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                </span>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                    <div class="tree-node">
                                        <ul>
                                            <li>
                                                <span>
                                                    <a class="node-icon jian" href="javascript:;"></a>
                                                    <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                </span>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tree-line"></div>
                                    </div>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tree-line"></div>
                                    </div>
                                    <div class="tree-node">
                                        <ul>
                                            <li>
                                                <span>
                                                    <a class="node-icon jian" href="javascript:;"></a>
                                                    <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                </span>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                                <div class="tree-node">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <a class="node-icon" href="javascript:;"></a>
                                                                <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div class="tree-line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tree-line"></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="tree-line"></div>
                        </div>

                        <div class="tree-node">
                            <ul>
                                <li>
                                    <span>
                                        <a class="node-icon jian" href="javascript:;"></a>
                                        <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                    </span>
                                    <div class="tree-node" >
                                        <ul>
                                            <li>
                                                <span>
                                                    <a class="node-icon" href="javascript:;"></a>
                                                    <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="tree-line"></div>
                                    </div>
                                    <div class="tree-node">
                                        <ul>
                                            <li>
                                                <span>
                                                    <a class="node-icon" href="javascript:;"></a>
                                                    <a class='node-name' href='javascript:;'>获取用户信息api</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="tree-line"></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="tree-line"></div>
                        </div>
                    </li>
                </ul>
                <div class="tree-line"></div>
            </div>-->
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
                treeData : []
            }
        },
        mounted : function(){
            this.loadData();
        },
        methods : {
            loadData : function(){
                var me = this;
                $.get("/tree.json" , function( data ){
                    me.treeData = data;
                });
            }
        }
    })
</script>

<style>
</style>