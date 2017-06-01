var hospital = require('../model/hospital').hospital;
var bancoSangre = require('../model/bancoSangre').bancoSangre;
function hospitalQueries(){
    this.getMenuHospital = function(req, res){
	console.log("Consulta Informacion Hospital");
	hospital.find(
	    {idhospital:req.body.idhospital,pass:req.body.pass},
	    "encargado telefono localizacion.direccion",
	    function(err,docs){
		if(err){
	    	    res.json({estado: 'Error'});
		}else{
		    res.json(docs);
		}
	    });
    }
    this.getBancoInformacion = function(req, res){
	console.log("Consulta Hospital Informacion Banco Sangre ");
	bancoSangre.find(
	    {idbanco:req.body.idbanco},
	    "encargado telefono localizacion.direccion tipo_de_sangre",
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		}else{
		    res.json(docs);
		}
	    });
    }
}
module.exports = new hospitalQueries();
