const fs = require('fs');
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)

const server = require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // USING READFILE
    fs.readFile('./big.file', function (err, data) {
        if (err) res.write(err);
        res.write(data.toString());
    });

    // USING READFILEASYNC
    readFileAsync('./big.file', { encoding: 'utf8' }).then((text) => res.write(text))

    // USING STREAMS
    var rs = fs.createReadStream('./big.file').pipe(res)

}).listen(4000, () => console.log('listening 4000'));