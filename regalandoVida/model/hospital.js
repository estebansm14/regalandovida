var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var hospital_schema = new Schema({
    idhospital: String,
    pass: String,
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
