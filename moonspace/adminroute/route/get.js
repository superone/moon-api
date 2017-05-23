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

function getDirNode(){
    var re = {
        
    }
}

var filesArr = [];
if(fs.existsSync( ROOT )){
    var dir = fs.readdirSync( ROOT );
    //dir.map
	(function dir(dirpath, fn) {
		var files = fs.readdirSync(dirpath);
		async(files, function (item, next) {
			var info = fs.statSync( path.join(dirpath , item) );
			if (info.isDirectory()) {
                filesArr.push(path.join( dirpath , item) );
				dir(path.join(dirpath , item , '/'), function () {
					next();
				});
			} else {
				filesArr.push(path.join( dirpath , item) );
				//callback && callback(dirpath + item);
				next();
			}
		}, function (err) {
			!err && fn && fn();
		});
	})(ROOT);

}


RESPONSE = filesArr;