const ifExist = require('../sql/ifExist.js');


function apiRoute(req, res) {
    ifExist(req.query).then(function(psd){
        if(psd){
            if(req.query.psd == psd){
                res.statusCode = 302;
                res.setHeader('Set-Cookie','user=123');
                res.setHeader('Location','/index');
                res.end('login success');
            }else{
                res.end('login failed');
            }
        }else{
            res.end('account is not exist');
        }
    })
}

module.exports = apiRoute;