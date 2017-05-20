var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://localhost/RegalandoVida");
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

/* var nose = new usuario({
 *     idusuario: "sramir60",
 *     nombre: "Sebastian Ramirez Lopez",
 *     telefono: "3112384918",
 *     nacionalidad: ({
 *  	pais: "Colombia",
 *  	departamento: "Antioquia",
 *  	ciudad: "Medellin",
 *     }),
 *     tipo_de_sangre: "AB-",
 *     historial_donaciones: [{
 *  	nombre_banco: "Clinica las Americas",
 *  	idbanco: "bAmericas",
 *  	fecha: "Enero 1 de 2010",
 *     },{
 *  	nombre_banco: "Hospital General de Medellin",
 *  	idbanco: "bGeneralMedellin",
 *  	fecha: "Febrero 31 de 2010",
 *     }],
 *     solicitudes_usuario: [{
 *  	solicitante: "Banco de Sangre Cruz Roja",
 *  	receptor: "Sebastian Ramirez lopez",
 *  	mensaje: "Solicitud de donacion de sangre para un usuario en estado de reservado",
 *     },{
 *  	solicitante: "Hospital Universitario de San Vicente Fundacion",
 *  	receptor: "Sebastian Ramirez lopez",
 *  	mensaje: "Solicitud de donacion de sangre para un usuario en estado critico",
 *     }]
 * });*/
