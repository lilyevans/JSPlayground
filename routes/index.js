var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/multiplier', function(req, res) {
  res.render('multiplier', { title: 'Multiplier'});
});

router.get('/emailValidator', function(req, res) {
  res.render('emailValidator', { title: 'Email Validator'});
});

module.exports = router;
