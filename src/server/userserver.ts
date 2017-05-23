/// <reference path="../_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import * as http from "http";

import * as Server from "../core/server";
import * as indexRoute from "./routes/index";

/**
 * The server.
 *
 * @class Server
 */
class userServer extends Server {

  //public app: express.Application;
  constructor(){
      super();
  }

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): userServer {
    return new userServer();
  }

  public getRootPath() : string{

    let sysconfig : any = this.getConfig();
    return sysconfig["server-route"];

  }

  public getPort():number {
    var config = this.getConfig();
    return config['server-port'] || 8080;
  }
  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private initConfig() : void {
    const port : number = this.getPort();
    const me : userServer = this;

    //configure jade
    this.app.set("views", path.join(__dirname, "../../resources/userviews"));
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

    this.app.set( "port", port );
    //create http server
    var server = this.server = http.createServer(this.app);

    //listen on provided ports
    server.listen(port);

    //add error handler
    server.on("error",  this.onError);

    //start listening on port
    server.on("listening", this.onListening);
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
}

var server = userServer.bootstrap();

export = server.app;