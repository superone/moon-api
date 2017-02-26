<template>
    <div v-on:click="message" class="page-header">
        <img class="page-logo" src="/images/moonlogo.png"/>
    </div>
</template>

<script>
    export default Vue.extend({
        data () {
            return {
                msg: 'Hello World!'
            }
        },
        methods : {
            message( e ){
                console.log(e);
            }
        }
    })
</script>

<style>
</style>