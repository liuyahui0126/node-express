const url = require('url');


function exp() {
    this.routers = [];
}
exp.prototype.use = function (router, fn) {
    this.routers.push({
        path: router,
        fn: fn
    })
}

exp.prototype.handle = function (req, res) {
    let count = 0;
    while (true) {
        let route = this.routers[count++];
        if (req.pathName == route.path) {
            route.fn(req, res);
            return true;
        }
        if (count == this.routers.length) {
            return false;
        }
    }
}

module.exports = exp;