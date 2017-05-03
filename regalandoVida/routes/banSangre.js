var express = require('express');
var router = express.Router();

/* GET bancoSangre listing. */
router.get('/', function(req, res, next) {
	//	res.send('no conecta');
	res.render('banSangre', {title: 'Banco de Sangre'});
});

module.exports = router;
