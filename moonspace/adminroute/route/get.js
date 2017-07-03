var fs = require("fs");
var path = require("path");

function async (arr, callback1, callback2) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        return callback2(new Error('第一个参数必须为数组'));
    }
    if (arr.length === 0)
        return callback2(null);
    (function walk(i) {
        if (i >= arr.length) {
            return callback2(null);
        }
        callback1(arr[i], function () {
            walk(++i);
        });
    })(0);
}

var userRootPath = moon.server.getUserRootPath();
//console.log(userRootPath);
var number = 1;
var filesArr = [{
    "nodeId" : number++,
    "menuName" : "/",
    "route" : "/",
    "routeType" : "view:html",
    "method" : "",
    "child" : []
}];

if(fs.existsSync( userRootPath )){
    
    //var dir = fs.readdirSync( userRootPath );
    //dir.map
	(function dir(dirpath, nodeArr , id , fn) {
        
		var files = fs.readdirSync(dirpath);
        files = moon.route.getSortFiles( files );

		async(files, function (item, next) {
            
			var info = fs.statSync( path.join(dirpath , item) );
            //console.log( path.join(dirpath , item) + ":" + info.isDirectory());
            
            var node = {
                "nodeId" : id++,
                "menuName" : item,
                "route" : "",
                "routeType" : "view:html",
                "method" : ""
            };

			if (info.isDirectory()) {
                node.child = [];

                //filesArr.push(path.join( dirpath , item) );
                node.route = "/" + item;
                nodeArr.push( node );
				dir(path.join(dirpath , item , '/'), node.child , id , function () {
					next();
				});
			} else {
				//nodeArr.push( path.join( dirpath , item) );
                var method = item.split(".");
                if( method.length === 2 ){
                    node.method = String ( method[0] );
                    node.method = node.method.toUpperCase();
                    nodeArr.push( node );
                }
				//callback && callback(dirpath + item);
				next();
			}
		}, function (err) {
            
			!err && fn && fn();

		});
	})( userRootPath , filesArr[0].child , number);

}


RESPONSE = filesArr;