var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

console.log(req.query)
  // res.render('index', { title: 'Express' });
  res.json({ error: 'err',req :req.query })
});

module.exports = router;
