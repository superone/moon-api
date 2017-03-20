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
                        {{coms[currentRouter].title}}
                        </a>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item , index) in coms" 
                        class="edit-select"
                        @click="changeRouter(index)"
                        :class="{'hide':!showSelects , 'active': (index===currentRouter), 'showMenu':showSelects}">
                        <a href="javascript:;">
                            <i :class="{'hide':!(index===currentRouter)}">&radic;</i>{{item.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <sub-com  v-for="(item , index) in coms" 
                      v-bind:is-full="isFull" 
                      v-bind:tab-item="item"
                      v-bind:current-router="currentRouter"
                      v-bind:router-index="index"
                      @on-isfull-change="onChangeFull"  >
            </sub-com>
        </div>
    </div>
</template>

<script>
    import * as subCom from "./sub";
    import * as menuData from "./data/menuData.js"

    export default Vue.extend({        
        components:{
            subCom
        },
        data () {
            return {
                add: "",
                del : "",
                showSelects : false,
                isFull : false,
                currentRouter : 0,
                coms : menuData
            }
        },
        methods : {
            changeRouter( index ){
                if ( index !== this.currentRouter ) {
                    this.$data.currentRouter = index;
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