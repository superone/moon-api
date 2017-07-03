var Adapter = function( fnname ){
    var args =  Array.prototype.slice.call(arguments , 1);
    if( typeof this.Adapter.prototype[ fnname ] === "function"){
        this.Adapter.prototype[ fnname ] .apply( this , args );
    }
};

Adapter.prototype = {
    constructor : Adapter,
    request : function( a ){
        console.log( a );
    }
}
