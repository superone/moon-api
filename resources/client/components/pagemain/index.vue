<template>
    <div class="page-main">
        <main-left></main-left>
        <main-right></main-right>
        <div class="left-bar">
            <ul>
                <li class="top-btn">
                    <a href="javascript:;"><img src="/images/icon/double-left-chevron.png?aaa"/></a>
                </li>
                <li class="active">
                    <a href="javascript:;"><img title="路由配置" src="/images/icon/double-directional-arrow.png"/></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="/images/icon/config.png"/></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import mainLeft from "../mainleft/index.vue"
    import mainRight from "../mainright/index.vue"
    export default {
        components:{
            mainLeft,
            mainRight
        },
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
</style>