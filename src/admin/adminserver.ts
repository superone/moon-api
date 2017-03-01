/// <reference path="../_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as fs from "fs";

import * as Server from "../core/server";
import * as indexRoute from "./routes/index";

/**
 * The server.
 *
 * @class Server
 */
class adminServer extends Server {

  public app: express.Application;

  private config : any;

  constructor(){

      super();

      if( !this.loadSysconfig() ){

          console.log("Can't load the config file in admin server");
          process.exit(1); 

      }

  }

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): adminServer {
    return new adminServer();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private initConfig() : void {
    //configure jade
    this.app.set("views", path.join(__dirname, "../../resources/views"));
    this.app.set("view engine", "jade");

    //mount logger
    //this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //add static paths
    this.app.use(express.static(path.join(__dirname, "../../public")));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() : void {
    //get router
    let router: express.Router;
    router = express.Router();

    //create routes
    var index: indexRoute.Default = new indexRoute.Default( this );

    //home page
    router.use("*", index.default.bind(index));

    //use router middleware
    this.app.use(router);
  }

  public getConfig () : any {

      return this.config;

  }

  private loadSysconfig() : boolean{

        let loadPath = path.join( process.cwd() , "moon.config.json");
        let exists = fs.existsSync( loadPath );
        if(exists){
            try{
              let data = fs.readFileSync( loadPath , "utf-8");
              this.config = JSON.parse(data);
            }catch(e){
                console.log("Unknow the config file");
                return false;
            }
            return true;
        }else{
            return false;
        }
  }
}

var server = adminServer.bootstrap();

export = server.app;