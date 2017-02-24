import Router from "../../core/router";

class adminRouter extends Router{
    config : any
    app : any
    constructor( app ){
        super();
        this.app = app;
    }
}


export default adminRouter;