import App from '../core/App';
import config from './config';
import Router  from "./route/index";

export default class adminApp extends App{
    constructor(){
        super();
        this._init_();
    }
    private _init_(){
        let app = this;
        // view engine setup
        app.set('views', path.join(__dirname, '../../resources/views'));
        app.set('view engine', 'jade');

        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, '../../public')));

        app.use('*', function(req ,res, next){
            app.analysis( req ,res, next);
        });

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
    }
    analysis( req , res ,next){
        if(req.originalUrl === "/" ){
            res.render('index', {title:'MoonApi'});
        }else{
            res.end(req.originalUrl);
        }
    }
}