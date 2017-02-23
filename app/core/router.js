"use strict";
var file = require("fs");
var Router = (function () {
    function Router(app) {
        var me = this;
        file.readFile(__dirname + '../../../configure/serverconfig.json', function (err, data) {
            if (err)
                throw err;
            me.config = JSON.parse(data);
        });
    }
    Router.prototype.route = function (req, res) {
        res.end(req.originalUrl);
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=router.js.map