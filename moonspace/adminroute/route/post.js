(function(){
    var refn = function(  req , res , next ){
        //res.render('index', {title:'MoonApi'});
        res.end("/post:route");
    }
    return refn;
})();