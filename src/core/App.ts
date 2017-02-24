import express  = require('express');

export default class App extends express{
    public _config : any
    constructor( config  ){
        super();
        this._config = config;
    }
}

