var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');

var connection = require('./connection/connection');
var bancoRoutes = require('./routes/bancoRoutes');
var hospitalRoutes = require('./routes/hospitalRoutes');

connection.inicia();
bancoRoutes.configurar(app);
hospitalRoutes.configurar(app);

app.use(express.static(path.join(__dirname, 'app')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

var server = app.listen(5000, function() {
    console.log('Escuchando en el puerto ', server.address().port);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
