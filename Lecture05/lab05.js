var express = require('express');
const axios = require('axios');
const {from} = require('rxjs')
const {shareReplay} = require('rxjs/operators');

var app = express();

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.set('strict routing',true);


app.get('/users', function (req, res) {


    obs$ = from(axios.get('https://randomuser.me/api/?results=10')).pipe(shareReplay(1));

    obs$.subscribe(data=>console.log(data.data));

    res.set("Link","/users?page=2")  //example paging header
    res.set('Cache-Control', 'public, max-age=31557600'); // one year

    res.end();


/*
    axios.get('https://randomuser.me/api/?results=10')
        .then(function (response) {
            // handle success
            console.log(response.data);
            res.json((response.data));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });*/


    /*    https.get('https://randomuser.me/api/?results=10', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(data).explanation);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });*/
    /*    fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => err)*/

});


app.listen(3000, () => console.log("Listening..."));