<template>
    <div class='tree'>
        <div class='tree-title'>路由列表</div>
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
    export default {
        components:{
            treeNode
        },
        data () {
            return {
                treeData : [
                    {
                        "nodeId" : "111",
                        "menuName" : "/(root)",
                        "route" : "/",
                        "routeType" : "view:html",
                        "requestType" : "get",
                        "child" : [
                            {
                                "nodeId" : "111",
                                "menuName" : "用户中心",
                                "route" : "/user",
                                "routeType" : "view:html",
                                "requestType" : "get",
                                "child" : [
                                    {
                                        "nodeId" : "111",
                                        "menuName" : "获取用户信息",
                                        "route" : "/userinfo",
                                        "routeType" : "restFull:get",
                                        "requestType" : "get",
                                        "child" :[

                                        ]
                                    },
                                    {
                                        "nodeId" : "111",
                                        "menuName" : "更新用户信息",
                                        "route" : "/userinfo",
                                        "routeType" : "restFull:post",
                                        "requestType" : "post",
                                        "child" :[
                                            
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
</style>