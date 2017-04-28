var bancoSangre = ({
	idbanco: Number,
	nombre: String,
	localizacion: [{
		país: String,
		departamento: String,
		ciudad: String,
		direccion: String
	    }] ,
	encargado: String,
	tipo_de_sangre: [{
		tipo_de_sangre: String,
		cantidad: Number
	    }],
	alerta: [{
		solicitante: String,
		receptor: String,
		mensaje: String,
		tipo_de_sangre: String
	    }],
	solicitudes_banco: [{
		solicitante: String,
		receptor: String,
		mensaje: String,
		tipo_de_sangre: String
	    }]

    });

