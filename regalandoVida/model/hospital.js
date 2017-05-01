var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect("mongodb://localhost/RegalandoVida");

var hospital_schema = new Schema({
    idhospitales: Number,
    nombre: String,
    localizacion: [{
  	país: String,
  	departamento: String,
  	ciudad: String,
  	direccion: String
    }] ,
    encargado: String,
    alerta: new Schema ({
  	solicitante: String,
  	receptor: String,
  	mensaje: String,
  	tipo_de_sangre: String
    })
    
});

var hospital = mongoose.model("hospital", hospital_schema);

module.exports.hospital = hospital;

