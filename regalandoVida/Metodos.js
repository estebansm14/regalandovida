var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var http = require('http');
var bancoSangre = require('./model/bancoSangre').bancoSangre;
//var hospital = require('./model/hospital').hospital;
//var usuario = require('./model/usuario').usuario;

app.get("/", function(req,res){   	
    console.log("Inicio Ruta Raiz");
    res.send("Ruta raiz");
});

app.put("/Editar", function(req,res){    
    bancoSangre.find({idbanco:"bClinicaAmericas"},function(err,docs){
    	console.log(docs.telefono);
	//docs.telefono = "1111111";
  	console.log("Editar");
    	res.send(docs);
    });
});

app.get("/Buscar", function(req,res){
    bancoSangre.find({idbanco:"bClinicaAmericas"},"encargado telefono",function(err,docs){
   	console.log(docs);
	console.log("Consulta");
   	res.send(docs);
    });
});

app.post("/Peticion", function(req,res){
    var yourModel = req.body;
    console.log("Consulta: " + yourModel);
    res.json(yourModel)

});

app.post("/Imprimir", function(req,res){
    bancoSangre.find({idbanco:req.body.encargado},function(err,docs){
	console.log("Consulta: " + req.body.encargado);
   	res.send(docs);
    });
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

var mongodbUri = 'mongodb://infobanco:usuario123@ds119081.mlab.com:19081/regalandovida';
//var mongodbUri = 'mongodb://localhost:27017';
mongoose.connect(mongodbUri, function(err){
    if(err){
	console.error('Can\'t connect to MongoDB\n'+ err)
	return err;
    }
    console.log("MongoDB connected");
});

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));


/* var nose = new bancoSangre({
 *     idbanco: "bMinoxidil",
 *     nombre: "Banco de Minoxidil",
 *     localizacion: ({
 *      	pais: "Colombia",
 *      	departamento: "Antioquia",
 *      	ciudad: "Yolombo",
 *      	direccion: "Calle 45 # 23 12"
 *     }),
 *     encargado: "Mr. Argelina",
 *     telefono: "5748192",
 *     tipo_de_sangre: ({
 *      	Amas: 500,
 *     	Amenos: 500,
 *     	Omas: 500,
 *      	Omenos: 500,
 *     	ABmas: 600,
 *       	ABmenos: 350
 *     })
 * });*/

/* var nose = new hospital({
 *     idhospitales: "hClinicaRosario",
 *     nombre: "Clinica del rosario",
 *     localizacion: ({
 *      	pais: "Colombia",
 *      	departamento: "Antioquia",
 *      	ciudad: "Medellin",
 *      	direccion: "Calle 12 sur # 74 23"
 *     }),
 *     encargado: "Dra. Carla",
 *     telefono: "5493029"
 * });*/

/* nose.save(function(err,nose,numero){
 *     if(err){
 *     	console.log(String(err));
 *     }
 *     console.log("DB Datos guardados");
 * });*/

//bancoSangre.find({nombre:"Banco de Sangre Las Americas",idbanco:"bAmericas"},"nombre encargado",function(err,docs){ 

/* bancoSangre.find({idbanco:"bClinicaAmericas"},function(err,docs){
 *     console.log(docs);
 *     console.log("Aqui")
 * });*/

/* bancoSangre.find({idbanco:"bClinicaAmericas"}, function(err,docs){
 *     console.log(docs);
 *     console.log("Prueba")
 * });*/
