const mutations = {
    setMenuTree( state , action ){
        state.currentView = action
    },
    setMenuToggle(state , v ){
        if(typeof v != "undefined"){
            state.menuToggle = v
        }else{
            state.menuToggle = !state.menuToggle
        }
    }
}

export default mutations;