import express  = require('express');

export class App extends express{
    type : string
    constructor( type : string ){
        this.type = type;
        var i = 0;
        super();
    }

    loadConfig (){
        var type = this.type;
        if( type == 'admin'){
            
        }
    }
}

