"use strict";
var Router = (function () {
    function Router(app) {
        var me = this;
    }
    Router.prototype.route = function (req, res) {
        res.end(req.originalUrl);
    };
    return Router;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;
//# sourceMappingURL=router.js.map