var usuario = ({
	idusuario: Number,
	nombre: String,
	telefono: String,
	nacionalidad: [{
		pais: String,
		departamento: String,
		ciudad: String  
	    }],
	tipo_de_sangre: String,
	historial_donaciones: [{
		nombre_banco: String,
		idbanco: String,
		fecha: Date
	    }],
	alerta: [{
		solicitante: String,
		receptor: String,
		mensaje: String,
		tipo_de_sangre: String
	    }],
	solicitudes_usuario: [{
		solicitante: String,
		receptor: String,
		mensaje: String,
		tipo_de_sangre: String
	    }]

    });