<template>
    <div class="main-content-right">
        <div class="tab-title">
            <a class='n-bar n-bar-left' @click="upTabtitle($event)" href="javascript:;"></a>
            <ul>
                <ol class="clearfl" :style="getOlStyle">
                    <li v-for="(item , index) in titles" :class="[curTitle==index?'cur':'']">
                        <a href="javascript:;" @click="changeTab(index)">{{item.title}}</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                </ol>
            </ul>
            <a class='n-bar n-bar-right' @click="downTabtitle" href="javascript:;"></a>
            <a class='n-bar n-bar-more' href="javascript:;"></a>
        </div>
        <div class="tab-content right-panel">
            <div v-for="(item , index) in titles" :class="[curTitle==index?'cur':'']" class="tab-div" >
                <font size="50" style="color:red;font-size: 50px;">:{{index}}:{{item.title}}</font>
               
            </div>
        </div>
    </div>
</template>

<script>
    export default Vue.extend({
        data () {
            return {
                titles : [{
                    title : "/(GET)"
                },{
                    title : "/document(GET)"
                },{
                    title : "../{documet_id}(GET)"
                },{
                    title : "../advance(GET)"
                },{
                    title : "/search(GET)"
                },{
                    title : "../{documet_id}(GET)"
                },{
                    title : "../advance(GET)"
                },{
                    title : "/search(GET)"
                },{
                    title : "../{documet_id}(GET)"
                },{
                    title : "../advance(GET)"
                },{
                    title : "/search(GET)"
                },{
                    title : "../{documet_id}(GET)"
                },{
                    title : "../advance(GET)"
                },{
                    title : "/search(GET)"
                }],
                olLeft : 0 ,
                curTitle : 0
            }
        },
        computed : {
            getOlStyle(){
                return "left:"+this.olLeft + "px;";
            }
        },

        methods : {
            upTabtitle ( e ){
                if( this.olLeft < 0){
                    if( Math.abs(this.olLeft) < 80 ){
                        this.olLeft += Math.abs(this.olLeft);
                    }else{
                        this.olLeft += 80;
                    }
                }
            },
            downTabtitle ( e ){
                if( this.olLeft < 0 && Math.abs(this.olLeft) < 80 ){
                    this.olLeft += Math.abs(this.olLeft);
                }else{
                    this.olLeft -= 80;
                }
            },
            changeTab( index ){
                this.curTitle = index;
            }
        }
    })
</script>

<style lang="less">
    .main-content-right{
        position: relative;
        box-sizing: border-box;
        height: 100%;
        overflow: hidden;
        padding:5px;
        .tab-title{
            padding: 0 46px 0 22px;
            //overflow:hidden;
            position:relative;
            .n-bar{
                position:absolute;
                height:22px;
                width:20px;
                top:2px;
                display:block;
                background:#333;
            }
            .n-bar-left{
                left:0px;
            }
            .n-bar-more{
                right:0px;
            }
            .n-bar-right{
                right:23px
            }
            >ul {
                overflow: hidden;
                position:relative;
                ol{
                    position: relative;
                    left: 0px;
                    width:100000px;
                }
                li{
                    position:relative;
                    float:left;
                    display:inline-block;
                    line-height:28px;
                    text-align:center;
                    margin-left:3px;
                    background:#333;
                    width:150px;
                    a{
                        display:block;
                        width:100%;
                        height:100%;
                        color:#787878;
                    }
                    .close{
                        display:none;
                        width:15px;
                        height:15px;
                        position:absolute;
                        top:3px;
                        right:3px;
                        background: url(/images/icon/close-small.png) no-repeat;
                    }
                }
                li:not(.cur):hover{
                    .close{
                        display:block;
                    }
                    a{
                        color:#aaa;
                    }
                }
                .cur{
                    position: relative;
                    background: #1a1a1a;
                    //border: 1px solid #333;
                    border-bottom: 0;
                    //top: 1px;
                    a{
                        color:#fff;
                    }
                    .close{
                        display:block;
                    }
                }
            }
        }
        .right-panel{
            //border:1px solid #333333;
            overflow:auto;
            width:100%;
            height:100%;
            background:#1a1a1a;
            padding: 10px;
            .tab-div{
                display:none;
            }
            .tab-div.cur{
                display:block;
            }
        }
    }
</style>