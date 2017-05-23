/// <reference path="../_all.d.ts" />
"use strict";
var debug = require("debug")("express:server");
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as http from "http";

import * as fs from "fs";


/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  private config : any;

  private server : http.Server;


  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
        if( !this.loadSysconfig() ){
            console.log("Can't load the config file in admin server");
            process.exit(1); 
        }else{
            //create expressjs application
            this.app = express();

            //configure application
            this.initConfig();

            //configure routes
            this.routes(); 
        }
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private initConfig() {
    
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {

  }
  
  public getConfig () : any {

      return this.config;

  }

  public getRootPath () : string{
    return "";
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
  
  //服务错误时的处理
  private onError( error ) : void {
      var addr = this.address();

      if (error.syscall !== "listen") {
        throw error;
      }

      var bind = typeof addr === "string"
        ? "Pipe " + addr
        : "Port " + addr.port;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case "EACCES":
          console.error(bind + " requires elevated privileges");
          process.exit(1);
          break;
        case "EADDRINUSE":
          console.error(bind + " is already in use");
          process.exit(1);
          break;
        default:
          throw error;
      }
  }
  //listen message
  private onListening( server ) : void {
        var addr = this.address();
        var bind = typeof addr === "string"
            ? "pipe " + addr
            : "port " + addr.port;
        debug("Listening on " + bind);
  }
}

export = Server;