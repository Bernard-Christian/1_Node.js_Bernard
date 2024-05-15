var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path = q.query;
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'halaman/index.html';
            break;
        case 'role':
            fileLocation = 'halaman/role.html';
            break;
        case 'home':
            fileLocation = 'halaman/index.html';
            break;
        case 'about':
            fileLocation = 'halaman/about.html';
            break;
        case 'about2':
            fileLocation = 'halaman/about2.html';
            break;
        case 'kkuser':
            fileLocation = 'halaman/userkk.html'
            break;
        case 'pendudukuser':
            fileLocation = 'halaman/userpenduduk.html'
            break;
        default:
            fileLocation = 'halaman/index.html';
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404,{'Content-type': 'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});
server.listen(8004);