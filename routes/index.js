var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/multiplier', function(req, res) {
  res.render('multiplier', { title: 'Multiplier'});
});

module.exports = router;
