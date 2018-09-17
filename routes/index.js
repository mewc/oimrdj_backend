var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/spotifytoken', function(req, res, next) {
    res.render('index', { title: 'Spotify token' });

});

module.exports = router;