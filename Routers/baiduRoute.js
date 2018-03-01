const render = require('../lib/render.js');

function baiduRoute(req, res) {
    render('baidu.html', res)
}

module.exports = baiduRoute;