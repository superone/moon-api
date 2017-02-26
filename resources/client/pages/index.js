/**
 * Created by keli on 2016/6/8.
 */
import store from '../vuex/home/store'
import App from './index.vue'

new Vue({
  store,
  el : "div",
  //components:{App}
  render: h => h(App)
})