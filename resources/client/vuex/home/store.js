import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

//Vue.use(Vuex)

const state = {
    currentView : "routeTree",
    menuToggle : true
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})