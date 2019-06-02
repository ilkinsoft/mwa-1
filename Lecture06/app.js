var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var cors = require("cors");
var fs = require('fs')
var morgan = require('morgan')

var gradesRoute = require('./routes/grades');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })


var app = express();


app.use(cors());
app.use(function (req, res, next) {

    console.log("middleware works")

    next();

//     if(req.body.username==="user" && req.body.pass==="pass"){
//  console.log("password correct")

//         next();
//     }else{
//         console.log("password not correct")
//     }


    
});

app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/grades', gradesRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => console.log("Listening..."));
