<template>
    <div class="code-edit code-right">
        <div class="cont">
            <div v-for="id in comsids" :id="id">
               <div class="method-tab">
                    <a href="javascript:;"  class="method-btn more-add">+</a>
                    <a href="javascript:;" class="method-btn active">GET</a>
                    <a href="javascript:;"  class="method-btn">POST</a>
                    <a href="javascript:;"  class="method-btn">DELETE</a>
                    <a href="javascript:;"  class="method-btn">UPDATE</a>
               </div> 
               <sub-com></sub-com>
            </div>
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
                comsids : [111],
                coms:[]
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
            }
        },
        watch : {
            // current ( newVal, oldVal ){
            //     const me = this;
            //     console.log(newVal);
            //     const ran = newVal;
            //     setTimeout(function(){
            //         const com = new sub({
            //             el : "#"+ran
            //         });
            //         me.coms.push(com);
            //     },100)
            // }
        }
    })
</script>

<style>
</style>