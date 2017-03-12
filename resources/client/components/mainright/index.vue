<template>
    <div class="code-edit code-right" :class="{'sizefull':isFull}">
        <div class="cont">
            <div class="tab-select-box"
                 :class="{'show': showSelects }"
                 v-on:mouseenter="selectsMenu(true)" 
                 v-on:mouseleave="selectsMenu(false)">
                <ul>
                    <li class="current-edit" :class="{'showMenu':showSelects}">
                        <a href="javascript:;">
                        {{coms[currentTab].title}}
                        </a>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item , index) in coms" 
                        class="edit-select"
                        @click="changeRouter(index)"
                        :class="{'hide':!showSelects , 'active': (index===currentTab), 'showMenu':showSelects}">
                        <a href="javascript:;">
                            <i :class="{'hide':!(index===currentTab)}">&radic;</i>{{item.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <sub-com  v-for="(item , index) in coms" 
                      v-bind:is-full="isFull" 
                      v-bind:tab-item="item"
                      v-bind:current-router="currentTab"
                      v-bind:router-index="index"
                      @on-isfull-change="onChangeFull"  >
            </sub-com>
        </div>
    </div>
</template>

<script>
    import * as subCom from "./sub"

    export default Vue.extend({        
        components:{
            subCom
        },
        data () {
            return {
                add: "",
                del : "",
                showSelects : false,
                coms : [{
                        id:111,
                        title:"router：/",
                        tabs : ["Configure","ClientTest","Input",
                        "Output","ClientMock","Transition",
                        "ServiceTest","Request","Receive",
                        "Help"],
                        titleTabs : [
                            "GET" 
                        ]
                    },{
                        id:111,
                        title:"router：/user",
                        tabs : ["Configure","ClientTest","Input",
                        "Output","ClientMock","Transition",
                        "ServiceTest","Request","Receive",
                        "Help"],
                        titleTabs : [
                            "GET" ,  "UPDATE" , "DELETE"
                        ]
                    },{
                        id:222,
                        title:"router：/router",
                        tabs : ["Configure","ClientTest","Input",
                        "Output","ClientMock","Transition",
                        "ServiceTest","Request","Receive",
                        "Help"],
                        titleTabs : [
                            "GET" , "POST" , "PUT" , "DELETE"
                        ]
                    },{
                        id:333,
                        title:"router：/document",
                        tabs : ["Configure","ClientTest","Input",
                        "Output","ClientMock","Transition",
                        "ServiceTest","Request","Receive",
                        "Help"],
                        titleTabs : [
                            "PUT" , "UPDATE" , "DELETE"
                        ]
                    }],
                isFull : false,
                currentTab : 0
            }
        },
        methods : {
            message( e ){
                console.log(e);
            },
            aclick(e){
                const ran = "com" + Math.floor(Math.random()*1000000+999999);
                this.comsids.push(ran);
                //this.current = ran;
                //console.log(this.current);
            },
            changeRouter( index ){
                if ( index !== this.currentTab ) {
                    this.$data.currentTab = index;
                    this.selectsMenu(false);
                }
            },
            onChangeFull( val ){
                this.$data.isFull = val ;
            },
            selectsMenu( val ){
                this.showSelects = val;
            }
        },
        watch : {
            
        }
    })
</script>

<style>
</style>