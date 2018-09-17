var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/spotifytoken', function(req, res, next) {
    // res.render('index', { title: 'Spotify token' });

    let spotifyApi = new SpotifyWebApi({
        clientId: '0418232de85048ae9be415d18c75202a',
        clientSecret: 'a531ce08054d49cd8123a1cf8d46ba10',
    });

    spotifyApi.clientCredentialsGrant().then(
        function(data) {
        console.log(data);
        spotifyApi.setAccessToken(data.body['access_token']);
        res.status(200).json({spotifyAccessToken: data.body['access_token'], otherData: data})

        },
    function(err){
            console.log(err);
    })

});

/* GET home page. */
router.get('/search', function(req, res, next) {

    let spotifyApi = new SpotifyWebApi({
        clientId: '0418232de85048ae9be415d18c75202a',
        clientSecret: 'a531ce08054d49cd8123a1cf8d46ba10',
    });
    let query = req.query.query;
    console.log(req.query.query);
    console.log(res);

    spotifyApi.clientCredentialsGrant().then(
        function(data) {
            console.log(data);
            spotifyApi.setAccessToken(data.body['access_token']);

            spotifyApi.searchTracks(query)
                .then(function(data) {
                    console.log(data);
                    res.status(200).json(data)
                },function(err){
                    console.log(err);
                })
        },
        function(err){
            console.log(err);
        })


});

module.exports = router;