var hospital = ({
idhospitales: Number,
	nombre: String,
	localizacion: [{
		país: String,
		departamento: String,
		ciudad: String,
		direccion: String
	    }] ,
	encargado: String,
	alerta: [{
		solicitante: String,
		receptor: String,
		mensaje: String,
		tipo_de_sangre: String
	    }]

    });