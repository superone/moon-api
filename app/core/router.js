"use strict";
const file = require("fs");
class Router {
    constructor(app) {
        var me = this;
        file.readFile(__dirname + '../../../configure/serverconfig.json', function (err, data) {
            if (err)
                throw err;
            me.config = JSON.parse(data);
        });
    }
    route(req, res) {
        res.end(req.originalUrl);
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map