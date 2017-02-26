const actions = {
    setAssetTree( o ){
        console.log( arguments );
        o.commit('setAssetTree')
    },
    setMenuTree(o , param){
        if(param.action){
            o.commit('setMenuTree' ,  param.action)
        }
    },
    setMenuToggle( o , v ){
        o.commit('setMenuToggle' , v)
    }
}

export default actions;