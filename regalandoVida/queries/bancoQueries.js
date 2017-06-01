var bancoSangre = require('../model/bancoSangre').bancoSangre;
var usuario = require('../model/usuario').usuario;
function bancoQueries(){
    this.getMenuBanco = function(req, res){
	console.log("Consulta Informacion Banco Sangre");
	bancoSangre.find(
	    {idbanco:req.body.idbanco,pass:req.body.pass},
	    "encargado telefono localizacion.direccion",
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		} else {				 
		    res.json(docs);
		}
	    });
    }
    this.getEstadoReserva = function(req, res){
	console.log("Consulta Estado Reservas Sangre");
	bancoSangre.find(
	    {idbanco:req.body.idbanco},
	    "tipo_de_sangre",
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		}else{
		    res.json(docs);
		}
	    });
    }
    this.putModificarReserva = function(req, res){
	console.log("Modificacion Reserva Sangre");
	bancoSangre.findOneAndUpdate(
	    {idbanco:req.body.idbanco},
	    {"tipo_de_sangre.Amas":req.body.Amas,"tipo_de_sangre.Amenos":req.body.Amenos,
	     "tipo_de_sangre.Omas":req.body.Omas,"tipo_de_sangre.Omenos":req.body.Omenos,
	     "tipo_de_sangre.ABmas":req.body.ABmas,"tipo_de_sangre.ABmenos":req.body.ABmenos},
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		}else{
		    res.json({estado: 'Ok'});		    
		}
	    });
    }
    this.getBuscarBanco = function(req, res){
	console.log("Consulta Estado Reserva Sangre Banco");
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
    this.getSolicitudesBanco = function(req, res){ //Revisar
	console.log("Consulta Solicitudes Banco");
	bancoSangre.find(
	    {idbanco:req.body.idbanco},
	    "solicitudes_banco",
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'})
		}else{
		    res.json(docs)
		}
	    });
    }
    this.postEnviarSolicitud = function(req, res){
	console.log("Enviar Solicitud");
	bancoSangre.findOneAndUpdate(
	    {nombre: req.body.receptor},
	    {$push:
	     {"solicitudes_banco":
	      {mensaje:req.body.mensaje,
	       receptor:req.body.receptor,
	       solicitante:req.body.solicitante}}},
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		}else{
		    res.json({estado: 'Ok'});
		}
	    });
    }
    this.postEliminarSolicitud = function(req, res){ // Revisar con Id
	console.log("Eliminando solicitud banco");
	bancoSangre.update(
	    {idbanco:req.body.idbanco},
	    {$pull:{"solicitudes_banco":{
		solicitante:req.body.solicitante}}},
	    function(err,docs){
		if(err){
		    res,json({estado: 'Error'});
		}else{
		    res.json({estado: 'Ok'});
		}
	    });
    }
    this.getBancos = function(req, res){
	console.log("Consulta Nombre Bancos");
	bancoSangre.find({},"nombre",function(err,docs){
	    if(err){
		res.json({estado: 'Error'});
	    }else{
		res.json(docs);
	    }
	});
    }
    this.getUsuarioSangre = function(req, res){ //Con parametro
	console.log("Consulta Usuarios Tipo Sangre");
	usuario.find(
	    {tipo_de_sangre:req.params.tipo_de_sangre},
	    "nombre telefono nacionalidad.ciudad",
	    function(err,docs){
		if(err){
		    res.json({estado: 'Error'});
		}else{
		    res.json(docs);
		}
	    });
    }
}
module.exports = new bancoQueries();
