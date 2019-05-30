const http = require('http');
const {fork} = require('child_process');
var url = require("url");


const server = http.createServer();


server.on('request', (req, res) => {
    //  const sum = longComputation();
    //  return res.end(`Sum is ${sum}`);


    var parsedUrl = url.parse(req.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;

    var fileName = queryAsObject['fileName'];

    console.log(fileName);

    //res.end(JSON.stringify(queryAsObject));


    const compute = fork('compute.js');
    compute.send(fileName);
    compute.on('message', chunk => {
        res.write(chunk);
    })
});

server.listen(3000);
