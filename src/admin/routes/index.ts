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
          let routepath : string = sysconfig['admin-route'];

          routepath = path.join( "" , routepath.replace("{space}", rootpath) );

          if(req.originalUrl === "/" ){
              res.render('index', {title:'MoonApi'});
          }else{
              this.runRoute.apply(this, arguments);
          }
      }

      private runRoute():void{
        
      }

      private loadConfig():boolean{
          return true;
      }
  }
}

export = Route;