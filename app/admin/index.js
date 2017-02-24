"use strict";
var App_1 = require("../core/App");
var config_1 = require("./config");
var index_1 = require("./route/index");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = new App_1.default(config_1.default);
var router = new index_1.default(app);
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
app.use(App_1.default.static(path.join(__dirname, '../../public')));
app.use('*', function (req, res) {
    //router.route.apply(this, arguments ); 
    var sysConfig = app.sysConfig || {};
    if (req.originalUrl === "/") {
        res.render('index', { title: 'MoonApi' });
    }
    else {
        router.route.apply(router, arguments);
    }
});
//new Router(app); 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
//# sourceMappingURL=index.js.map