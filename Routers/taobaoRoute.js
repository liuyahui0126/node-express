const render = require('../lib/render.js');

function taobaoRoute(req, res) {
    render('taobao.html', res)
}

module.exports = taobaoRoute;