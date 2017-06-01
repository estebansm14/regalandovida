var hospital = require('../queries/hospitalQueries');
function hospitalRoutes(){
    this.configurar = function(app){
	app.post('/api/menuHospital', function(req, res){
	    hospital.getMenuHospital(req, res);
	})
	app.post('/api/bancoInformacion', function(req, res){
	    hospital.getBancoInformacion(req, res);
	})
    }
}
module.exports = new hospitalRoutes();
