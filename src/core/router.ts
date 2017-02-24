import file = require("fs");

export default class Router{
    config : any

    constructor( app ){
        var me = this;
    }

    route(req , res){
        res.end(req.originalUrl);
    }

}