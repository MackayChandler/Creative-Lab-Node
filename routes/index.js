var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'Public' });
});
router.get('/pokemon', function(req, res) {
    console.log("In Pokemon");
    var myReg = req.query.name;
    var url = "https://api.pokemontcg.io/v1/cards?name=" + myReg;
    console.log(url);
    request(url).pipe(res);
});
module.exports = router;
