import { consoleTestResultHandler } from 'tslint/lib/test';
import { isNestedModuleDeclaration } from 'tslint/lib';
/// <reference path="../_all.d.ts" />
"use strict";
import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import * as vm from "vm";
import * as colors from "colors";
import * as util from "util";

import * as RouteConfigure from "./route.configure";
import * as Moon from "./moon";

class Route {

      //configs
      public config : any;

      public server : any;

      public routePath : string;

      private configure : RouteConfigure; 

      //init
      constructor( server ){

          this.server = server;
          this.configure = new RouteConfigure( this ); //解析路由配置
          
          if( !this.loadConfig() ){

              console.log("Can't load the config file");
              process.exit(1); 

          }

      }

      //路由总入口
      public default(req: express.Request, res: express.Response, next: express.NextFunction) {
          //render page
          let sysconfig : any = this.server.getConfig();
          let rootpath : string = path.join( process.cwd() , sysconfig['moonspace']);
          this.routePath = this.server.getRootPath();

          this.routePath = path.join( "" , this.routePath.replace("{space}", rootpath) );

          //if(req.originalUrl === "/" ){
              //res.render('index', {title:'MoonApi'});
          //}else{
              this.runRoute.apply(this, arguments);
          //}
      }

      public getSortFiles( arr ):any{
         return this.configure.sortFiles( arr );
      }

      //路由执行
      private runRoute(req: express.Request, res: express.Response, next: express.NextFunction):void{
          
          let err :string = "";
          let reqData  = this.analyseReq(req);
          let method = req.method.toLocaleLowerCase();
          let route = reqData.route ;
          let reqPath = path.join( this.routePath , route , method + ".js" );
          let filecode : string;

          if( fs.existsSync( reqPath ) ){
              filecode = fs.readFileSync( reqPath , "utf-8");
              //var routefn = require( reqPath );
              var SYSTEM = this.server.getConfig();
              let moon = new Moon( this ,  this.server);
              //SYSTEM = util.inspect( SYSTEM );
              SYSTEM.rootPath = process.cwd();
              SYSTEM.ROUTEPATH = this.routePath;

              const sandbox = {
                  require       :   require,
                  exports       :   exports,
                  console       :   console,
                  ROOT          :   SYSTEM.ROUTEPATH,
                  RES           :   res,
                  REQ           :   req,
                  RESPONSE      :   "",

                  moon          :  moon,
                  $m            :  moon
              }

              //vm.runInThisContext( "(function(){" + filecode + "})")(require);

              var script = new vm.createScript( filecode );
              const context = new vm.createContext(sandbox);
              script.runInContext(context);

              if( typeof sandbox.RESPONSE  !== "string"){
                  sandbox.RESPONSE = JSON.stringify( sandbox.RESPONSE  );
              }

              res.end( sandbox.RESPONSE );
              //var routefn = eval( filecode );

              //routefn.apply( this , arguments );
          }

          if( !this.routePath ) {
              err = "Can't find the route!";
              res.end( err );
              return;
          }

          res.end("Response is None");
      }
      //调入配置
      private loadConfig():boolean {
          return true;
      }
      //解析reqest  输出整理后的请求信息
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

  export = Route;