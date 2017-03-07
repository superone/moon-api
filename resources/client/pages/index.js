/**
 * Created by keli on 2016/6/8.
 */
import store from '../vuex/home/store'
import App from './index.vue'
import router from "./router"


new Vue({
  router,
  store,
  el : "div",
  //components:{App}
  render: h => h(App)
})