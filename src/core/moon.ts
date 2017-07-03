/// <reference path="../_all.d.ts" />
"use strict";

//用于路由内部调用
class Moon {

    public route : any;
    
    public server : any;
    
    constructor( route , server ){
        this.route  = route;
        this.server = server;
    }
}

export = Moon;