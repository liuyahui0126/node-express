const fs = require('fs');
const path = require('path');

function render(fileName, res) {
    fs.readFile(path.resolve(__dirname,'..','views', fileName), function (err, data) {
        if (err) {
            res.statusCode = 500;
            res.statusMessage = 'server is done';
            res.end('500');
        } else {
            res.end(data);
        }
    })
}

module.exports = render;