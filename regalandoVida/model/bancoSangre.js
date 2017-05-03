var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect("mongodb://localhost/RegalandoVida");

var bancoSangre_schema = new Schema({
    idbanco: String,
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
    alerta: new Schema ({
	solicitante: String,
	receptor: String,
	mensaje: String,
	tipo_de_sangre: String
    }),
    solicitudes_banco: new Schema ({
	solicitante: String,
	receptor: String,
	mensaje: String,
	tipo_de_sangre: String
    })

});

var bancoSangre = mongoose.model("bancoSangre",bancoSangre_schema);

module.exports.bancoSangre = bancoSangre;
