const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const exp = require('./lib/exp.js');
const render = require('./lib/render.js');
const taobaoRoute = require('./Routers/taobaoRoute');
const baiduRoute = require('./Routers/baiduRoute');
const indexRoute = require('./Routers/indexRoute');
const loginRoute = require('./Routers/loginRoute');
const apiRoute = require('./Routers/apiRoute');

const app = new exp();

app.use('/taobao', taobaoRoute);
app.use('/baidu',baiduRoute);
app.use('/index',indexRoute);
app.use('/login',loginRoute);
app.use('/api', apiRoute);

const server = http.createServer(function (req, res) {
    let parseUrl = url.parse(req.url, true);
    req.pathName = parseUrl.pathname;
    req.query = parseUrl.query;
    let regStr = /\.js|css$/;
    if(regStr.test(req.pathName)){
        getStatic(req,res);
    }
    else if (app.handle(req, res)) {
        return;
    } else {
        res.end('404');
    }
})

function getStatic(req,res){
    let pathName = req.pathName;
    pathName = pathName.slice(1);
    const rs = fs.createReadStream(path.resolve(__dirname,pathName));
    rs.pipe(res);
    // rs.on('data',function(data){
    //     res.write(data);
    // })
    // rs.on('end',function(){
    //     res.end();
    // });
    // fs.readFile(path.resolve(__dirname,pathName),function(err,data){
    //     if(err){
    //         res.statusCode = 404;
    //         res.statusMessage = 'file not found';
    //     }
    //     res.end(data);
    // })
}

server.listen(3000);
