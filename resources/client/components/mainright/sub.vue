<template>
    <div class="route-edit-main">
        <div class="edit-title">
            <ul>
                <li>input</li>
                <li>output</li>
                <li>client-mock</li>
            </ul>
        </div>
    </div>
</template>

<script>


    export default Vue.extend({
        data () {
            return {
                i:0,
                current : "",
                msg: '这是一个自组件'
            }
        },
        
        created: function () {
            this.$data.current = "initData";
        },

        watch :{
            current( newV , oldV){
                if(typeof this[newV] === "function" ){
                    this[newV].call( this );
                }
            }
        },

        methods : {
            initData(){
                this.$data.i += 1;
            }
        }
    })
</script>

<style>
</style>