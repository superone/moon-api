import App = require('../core/App');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import ejs = require('ejs');

import index = require('../../routes/index');
import { Router } from "../core/router";

var app = new App.App("admin");
console.log(app.type);

var router = new Router(app);

// view engine setup
app.set('views', path.join(__dirname, '../../resources/views'));
//app.engine('.html', ejs.__express);
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(App.App.static(path.join(__dirname, '../../public')));

app.use('*', function(req, res){
  //router.route.apply(this, arguments ); 
    if(req.originalUrl === "/" ){
      res.render('index', {title:'MoonApi'});
    }else{
      router.route.apply( router ,arguments );
    }
});

//new Router(app); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
module.exports = app;
