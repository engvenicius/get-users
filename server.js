const http = require('node:http');

JSON.stringify();

const user = {
    name: 'Venicius Farias',
    email: 'venicius@gmail.com'
};

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin')
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify({
        name: 'Venicius Farias',
        email: 'eng.venicius@gmail.com',
        age: 29
    }));
}).listen(3000);

