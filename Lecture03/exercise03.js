const fs=require('fs');
const server = require('http').createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello');
}).listen(4000,()=>console.log('listening 4000'));