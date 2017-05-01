var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect("mongodb://localhost/RegalandoVida");

var bancoSangre_schema = new Schema({
    nombre: String,
    localizacion: [{
	pais: String,
	departamento: String,
	ciudad: String,
	direccion: String
    }] ,
    encargado: String,
    tipo_de_sangre: new Schema ({
	tipo_de_sangre: String,
	cantidad: Number
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
