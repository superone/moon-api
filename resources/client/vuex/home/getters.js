const getters = {
  getCurrentMenu(state){
    return state.currentView;
  },
  getMenuToggle(state){
      return state.menuToggle
  }
}

export default getters;