var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var gradesRoute = require('./routes/grades');

var entity = [
    {id: 1, name: "Asaad Saad", course: "CS572", grade: 95},
    {id: 2, name: "Eren Ozturk", course: "CS572", grade: 100}
];


var app = express();


app.use(cors());
app.use(function (req, res, next) {
 console.log("middleware works")

    next();
});

app.use(logger('dev'));
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
