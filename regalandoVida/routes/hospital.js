var express = require('express');
var router = express.Router();

/* GET hospital listing. */
router.get('/', function(req, res, next) {
	res.render('hospit', {title: 'Hospital'});
});

module.exports = router;
