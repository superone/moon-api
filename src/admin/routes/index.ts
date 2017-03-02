/// <reference path="../../_all.d.ts" />
"use strict";
import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import * as colors from "colors";

namespace Route {

  export class Default {

      //configs
      public config : any;

      public server : any;

      public routePath : string;

      //init
      constructor( server ){

          this.server = server;
          
          if( !this.loadConfig() ){

              console.log("Can't load the config file");
              process.exit(1); 

          }

      }

      public default(req: express.Request, res: express.Response, next: express.NextFunction) {
          //render page
          let sysconfig : any = this.server.getConfig();
          let rootpath : string = path.join( process.cwd() , sysconfig['moonspace']);
          this.routePath = sysconfig['admin-route'];

          this.routePath = path.join( "" , this.routePath.replace("{space}", rootpath) );

          //if(req.originalUrl === "/" ){
              //res.render('index', {title:'MoonApi'});
          //}else{
              this.runRoute.apply(this, arguments);
          //}
      }

      private runRoute(req: express.Request, res: express.Response, next: express.NextFunction):void{
          
          let err :string = "";
          let reqData  = this.analyseReq(req);
          let method = req.method.toLocaleLowerCase();
          let route = reqData.route ;
          let reqPath = path.join( this.routePath , route , method + ".js");
          let filecode : string;

          if( fs.existsSync( reqPath )  ){
              filecode = fs.readFileSync( reqPath , "utf-8");

              var routefn = eval( filecode );
              routefn.apply( this , arguments );
          }

          if( !this.routePath ) {
              err = "Can't find the route!";
              res.end( err );
              return;
          }

          res.end( req.url );
      }

      private loadConfig():boolean {
          return true;
      }

      private analyseReq( req : express.Request) : object{
          let re = {
              route : ""
          }
          let route : string[];
          route = req.originalUrl.split("?");
          re.route = route[0].replace(/\#+/g , "");

          return re
      }
  }
}

export = Route;