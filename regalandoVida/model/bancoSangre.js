var mongoose = require("mongoose");
var Schema = mongoose.Schema;
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
