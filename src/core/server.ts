/// <reference path="../_all.d.ts" />
"use strict";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import * as fs from "fs";


/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  private config : any;


  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.initConfig();

    //configure routes
    this.routes(); 

    if( !this.loadSysconfig() ){

        console.log("Can't load the config file in admin server");
        process.exit(1); 

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
}

export = Server;