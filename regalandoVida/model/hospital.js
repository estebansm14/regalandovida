var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://localhost/RegalandoVida");
var hospital_schema = new Schema({
    idhospital: String,
    nombre: String,
    localizacion: ({
  	país: String,
  	departamento: String,
  	ciudad: String,
  	direccion: String
    }),
    encargado: String,
    telefono: String,
});
var hospital = mongoose.model("hospital", hospital_schema);
module.exports.hospital = hospital;

/* var nose = new hospital({
 *     idhospital: "hSanIgnacio",
 *     nombre: "Hospital Universitario San Ignacio",
 *     localizacion: ({
 * 	pais: "Colombia",
 * 	departamento: "Antioquia",
 * 	ciudad: "Medellin",
 * 	direccion: "Carrera 7 #40-62",
 *     }),
 *     encargado: "Dra. Ignacio",
 *     telefono: "5946161"
 * });*/
