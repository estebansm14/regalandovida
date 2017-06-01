var bancoSangre = require('../queries/bancoQueries');
function bancoRoutes(){
    this.configurar = function(app){
	app.post('/api/menuBanco/', function(req, res){
	    bancoSangre.getMenuBanco(req, res);
	})
	app.post('/api/estadoReserva/', function(req, res){
	    bancoSangre.getEstadoReserva(req, res);
	})
	app.post('/api/modificarReserva/', function(req, res){
	    bancoSangre.putModificarReserva(req, res);
	})
	app.post('/api/buscarBanco/', function(req, res){
	    bancoSangre.getBuscarBanco(req, res);
	})
	app.post('/api/solicitudesBanco/', function(req, res){
	    bancoSangre.getSolicitudesBanco(req, res);
	})
	app.post('/api/enviarSolicitud/', function(req, res){
	    bancoSangre.postEnviarSolicitud(req, res);
	})
	app.post('/api/eliminarSolicitud/', function(req, res){
	    bancoSangre.postEliminarSolicitud(req, res);
	})
	app.get('/api/bancos/', function(req, res){
	    bancoSangre.getBancos(req, res);
	})
	app.get('/api/usuario/:tipo_de_sangre', function(req, res){
	    bancoSangre.getUsuarioSangre(req, res);
	})
    }
}
module.exports = new bancoRoutes();
