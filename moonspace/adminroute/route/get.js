(function(){
    var re = function(  req , res , next ){
        //res.render('index', {title:'MoonApi'});
        res.end("/get:route");
    }
    return re;
})();