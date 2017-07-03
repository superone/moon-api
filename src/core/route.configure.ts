import * as fs from "fs";
import * as path from "path";

class RouteConfigure {

    private route : any;
      //init
    constructor( route ){

        this.route = route;

    }

    //目录排序
    public sortFiles( fileArr ) : any {
        let rearr  = [] , 
            t  , 
            files  = [] , 
            dirs  = [] ;

        fileArr.forEach(function( v ){ 
            t = String( v ).split(".js");
            if( t.length === 1 ){ //目录
                dirs.push( v );
            }else if( t.length > 1 ){ //文件
                t = t[0];
                if( String( t ).split(".").length === 1 ){
                    files.push( v );
                }
            }
        });

        rearr = files;
        dirs.forEach(function( v ){
            rearr.push( v );
        });

        //console.log( rearr );
        return rearr;
    }
}

export = RouteConfigure;