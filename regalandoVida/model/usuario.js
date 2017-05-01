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
    historial_donaciones: ({
 	nombre_banco: String,
 	idbanco: String,
 	fecha: Date
    }),
    alerta: new Schema ({
 	solicitante: String,
 	receptor: String,
 	mensaje: String,
 	tipo_de_sangre: String
    }),
    solicitudes_usuario: new Schema ({
 	solicitante: String,
 	receptor: String,
 	mensaje: String,
 	tipo_de_sangre: String
    })
    
});

var usuario = mongoose.model("usuario", usuario_schema);

module.exports.usuario = usuario;
