var dns = require('dns');


dns.resolve("www.mum.edu",async function (err, data) {


    //console.log(err);
    await console.log(data);

})