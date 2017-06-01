var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var usuario_schema = new Schema({
    idusuario: String,
    nombre: String,
    telefono: String,
    nacionalidad: ({
 	pais: String,
 	departamento: String,
 	ciudad: String
    }),
    tipo_de_sangre: String,
    historial_donaciones: [{
 	nombre_banco: String,
 	idbanco: String,
 	fecha: String,
    }],
    solicitudes_usuario: [{
 	solicitante: String,
 	receptor: String,
 	mensaje: String,
    }]
});
var usuario = mongoose.model("usuario", usuario_schema);
module.exports.usuario = usuario;
