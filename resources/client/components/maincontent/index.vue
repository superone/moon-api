<template>
    <div class="main-content-right">
        <div class="tab-title">
            <a class='n-bar n-bar-left' href="javascript:;"></a>
            <ul>
                <ol class="clearfl">
                    <li class="cur">
                        <a href="javascript:;">/(GET)</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                    <li>
                        <a href="javascript:;">/document(GET)</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                    <li>
                        <a href="javascript:;">../{documet_id}(GET)</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                    <li class="">
                        <a href="javascript:;">/(GET)</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                    <li>
                        <a href="javascript:;">/document(GET)</a>
                        <a class="close" href="javascript:;"></a>
                    </li>
                </ol>
            </ul>
            <a class='n-bar n-bar-right' href="javascript:;"></a>
            <a class='n-bar n-bar-more' href="javascript:;"></a>
        </div>
        <div class="tab-content right-panel">
            <div class="tab-div" v-html="msg">
                {{msg}}
            </div>
        </div>
    </div>
</template>

<script>
    export default Vue.extend({
        data () {
            return {
                msg  :  " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! " + 
                " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! <br> <br> <br> <br> <br> <br>" +
                " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! <br> <br> <br> <br> <br> <br>" +
                " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! <br> <br> <br> <br> <br> <br>" +
                " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! <br> <br> <br> <br> <br> <br>" +
                " hello world!  hello world!  hello world!  hello world!  hello world!  hello world!  hello world! <br> <br> <br> <br> <br> <br>" 
            }
        },

        methods : {
            message( e ){
                console.log(e);
            }
        }
    })
</script>

<style lang="less">
    .main-content-right{
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
                ol{
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
                li:hover{
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
        }
    }
</style>