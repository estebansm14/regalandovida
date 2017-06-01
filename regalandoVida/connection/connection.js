//var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
function Conexion(){
    this.inicia = function(){
	var mongodbUri = 'mongodb://infobanco:usuario123@ds119081.mlab.com:19081/regalandovida';	
	//MongoClient.connect(mongodbUri, function(err){
	mongoose.connect(mongodbUri, function(err){
	    if(err){
		console.error('Can\'t connect to MongoDB\n' + err);
		return err;
	    }
	    console.log("MongoDB connected");
	});
	//var db = mongoose.connection;
	//db.on('error', console.error.bind(console, 'connection error:'));
    }
}
module.exports = new Conexion();
