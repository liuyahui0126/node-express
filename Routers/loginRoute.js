const render = require('../lib/render.js');

function loginRoute(req, res) {
    render('login.html', res)
}

module.exports = loginRoute;