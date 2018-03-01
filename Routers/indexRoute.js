const render = require('../lib/render.js');

function indexRoute(req, res) {
    let cookie = req.headers.cookie;
    let arr = cookie ? cookie.split(';') : [];
    let obj = arr.reduce(function (obj, item, index) {
        let arr1 = item.split('=');
        obj[arr1[0].trim()] = arr1[1];
        return obj;
    }, {})
    console.log(obj);
    if (obj['user']) {
        render('index.html', res);
    } else {
        res.statusCode = 302;
        res.setHeader('Location', '/login');
        res.end();
    }
}

module.exports = indexRoute;