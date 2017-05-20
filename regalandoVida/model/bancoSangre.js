var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://localhost/RegalandoVida");
var bancoSangre_schema = new Schema({
    idbanco: String,
    pass: String,
    nombre: String,
    localizacion: ({
	pais: String,
	departamento: String,
	ciudad: String,
	direccion: String
    }),
    encargado: String,
    telefono: String,
    tipo_de_sangre: ({
	Amas: Number,
	Amenos: Number,
	Omas: Number,
	Omenos: Number,
	ABmas: Number,
	ABmenos: Number
    }),
    solicitudes_banco: [{
	solicitante: String,
	receptor: String,
	mensaje: String,
    }]
});
var bancoSangre = mongoose.model("bancoSangre",bancoSangre_schema);
module.exports.bancoSangre = bancoSangre;

/* var nose = new bancoSangre({
 *     idbanco: "bClinicaCardiovascular",
 *     pass: "bClinicaCardiovascular"
 *     nombre: "Clinica Cardiovascular",
 *     localizacion: ({
 * 	pais: "Colombia",
 * 	departamento: "Antioquia",
 * 	ciudad: "Medellin",
 * 	direccion: "Calle 55 #75 32"
 *     }),
 *     encargado: "Dra. Eloy",
 *     telefono: "3482914",
 *     tipo_de_sangre: ({
 * 	Amas: 490,
 * 	Amenos: 250,
 * 	Omas: 920,
 * 	Omenos: 520,
 * 	ABmas: 380,
 * 	ABmenos: 730
 *     }),
 *     solicitudes_banco: [{
 * 	solicitante: "Cruz Roja",
 * 	receptor: "Clinica Cardiovascular",
 * 	mensaje: "Se solicita disponibilidad de sagre de caracter urgente, para un paciente en estado critico",
 * 	tipo_de_sangre: "AB-"
 *     }]
 * });*/
