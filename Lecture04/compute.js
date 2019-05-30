/*
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};

process.on('message', (msg) => {
  console.log(msg);

  const sum = longComputation();
  process.send(sum);
});
*/

var fs = require("fs");
var path = require("path");


//console.log(path.join(__dirname ,param).toString);

process.on('message' , (param) => {
  //console.log(param);
  var readable = fs.createReadStream(path.join(__dirname ,param+'.file') , 'utf8');
  readable.on('data', function(chunck){
    process.send(chunck);
  })
});