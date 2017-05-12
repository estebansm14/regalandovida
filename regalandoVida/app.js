var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var logger = require('morgan');
app.use(logger('dev'));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
/* var cookieParser = require('cookie-parser');
 * app.use(cookieParser());*/
var bancoSangre = require('./model/bancoSangre').bancoSangre;
//var hospital = require('./model/hospital').hospital;
//var usuario = require('./model/usuario').usuario;
app.post("/Peticion", function(req,res){
    //var Peticion = req.body;
    console.log("Aqui Envio Una Peticion A El Servidor");
    console.log(req.body);
    //var yourModel = req.body.encargado;
    //console.log("Consulta: " + yourModel);
    res.send("recieved your request!\n");
});
app.get('/', function(req, res){
    res.sendfile('./public/index.html');
});
app.get("/api/menuBanco", function(req,res){    
    //bancoSangre.find({idbanco:"bClinicaAmericas"},"encargado telefono localizacion.direccion",function(err,docs){
    console.log("Consulta Informacion Banco Sangre\n");
    bancoSangre.find({idbanco:req.body.idbanco},"encargado telefono localizacion.direccion",function(err,docs){
	console.log(docs + "\n");
	res.json(docs);
    });
});
app.get("/api/estadoReserva", function(req,res){
    console.log("Consulta Estado Reservas Sangre\n");
    bancoSangre.find({idbanco:req.body.idbanco},"tipo_de_sangre",function(err,docs){
	console.log(docs);
	res.json(docs);
    });
});
app.post("/api/estadoReserva", function(req,res){
    console.log("Modificacion Reserva Sangre\n");
    bancoSangre.findOneAndUpdate({idbanco:req.body.idbanco},
				 {"tipo_de_sangre.Amas":req.body.Amas,"tipo_de_sangre.Amenos":req.body.Amenos,"tipo_de_sangre.Omas":req.body.Omas,"tipo_de_sangre.Omenos":req.body.Omenos,"tipo_de_sangre.ABmas":req.body.ABmas,"tipo_de_sangre.ABmenos":req.body.ABmenos},
				 function(err,docs){
	res.send("\nModificaciones De Las Reservas De Sangre Realizadas");
    });
});
app.get("/api/buscarBanco", function(req,res){
    console.log("Consulta Estado Reserva Sangre Banco\n");
    bancoSangre.find({idbanco:req.body.idbanco},"tipo_de_sangre",function(err,docs){
	console.log(docs);
	res.json(docs);
    });
});
app.get("/api/solicitudesBanco", function(req,res){
    console.log("Consulta Solicitudes Banco\n");
    bancoSangre.find({idbanco:req.body.idbanco},"solicitudes_banco",function(err,docs){
	console.log(docs);
	res.json(docs);
    });
});
app.post("/Imprimir", function(req,res){
    bancoSangre.find({idbanco:req.body.encargado},function(err,docs){
	//console.log(req.query.encargado);
	console.log("Consulta: " + req.body.encargado);
	res.send(docs);
    });
});
/* bancoSangre.find({},function(err,docs){
 *     console.log(docs);
 *     console.log("Aqui")
 * });*/
//var index = require('./routes/index');
//var users = require('./routes/users');
//var banSangre = require('./routes/banSangre');
//var hospit = require('./routes/hospital');
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/banSangre', express.static(path.join(__dirname, 'public')));
//app.use('/hospital', express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);
//app.use('/banSangre', banSangre);
//app.use('/hospital', hospit);
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

var mongodbUri = 'mongodb://infobanco:usuario123@ds119081.mlab.com:19081/regalandovida';
//var mongodbUri = 'mongodb://localhost:27017';
mongoose.connect(mongodbUri, function(err){
    if(err){
	console.error('Can\'t connect to MongoDB\n' + err)
	return err;
    }
    console.log("MongoDB connected");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/* app.post("/api/menuBanco", function(req,res){
 *     //bancoSangre.find({nombre:"Banco de Sangre Las Americas",idbanco:"bAmericas"},function(err,docs){
 *     bancoSangre.find({},function(err,docs){
 * console.log(docs);
 * res.send("Hola Mundo");
 *     });
 * });
 * */
//var Schema = mongoose.Schema;
//var banco = mongoose.model('banco', bancoSangreDB);
//var hospital = mongoose.model('hospital', hospitalDB);
//var usuario = mongoose.model('usuario', usuarioDB);
//var silence = new banco({ name: 'Silence' });
//console.log(silence.name);

/* var nose = new bancoSangre({
 *     idbanco: "bCruzRoja",
 *     nombre: "Banco de Sangre Cruz Roja",
 *     localizacion: ({
 * pais: "Colombia",
 * departamento: "Antioquia",
 * ciudad: "Medellin",
 * direccion: "Calle 74 # 12 65"
 *     }),
 *     encargado: "Dra. Erminia",
 *     telefono: "9846352",
 *     tipo_de_sangre: ({
 * Amas: 940,
 * Amenos: 700,
 * Omas: 100,
 * Omenos: 920,
 * ABmas: 730,
 *  ABmenos: 450
 *     })
 * });*/
/* nose.save(function(err,user,numero){
 *     if(err){
 *  console.log(String(err));
 *     }
 *     console.log("DB Datos guardados");
 * });
 * */
