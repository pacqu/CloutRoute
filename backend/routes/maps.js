var express = require('express');
var router = express.Router();
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD3_GHmb4k7sKXq9hQ9nOtJYCwZ_IhmGP8'
});

router.post('/getRoute',function(req, res, next) {
  var originAdd = req.body.originAdd;
  var destinationAdd = req.body.destinationAdd;
  googleMapsClient.geocode({
    address: originAdd
  }, function(err, ori) {
    if (!err) {
      var origin = ori.json.results[0].geometry.location;
      console.log(origin);
      googleMapsClient.geocode({
        address: destinationAdd
      }, function(err, des) {
        if (!err) {
          var destination = des.json.results[0].geometry.location;
          console.log(destination);
          googleMapsClient.directions({
            'origin':origin,
            'destination':destination,
            'mode': 'transit'
          }, function(err, response) {
            if (!err) {
              console.log(response.json);
              res.send(response.json);
            }
            else{
              console.log(err)
            }
          });
        }
        else{
          console.log(err)
        }
      });
    }
    else{
      console.log(err)
    }
  });
});
/*
router.get('/', function(req, res, next) {
  googleMapsClient.geocode({
    address: '7323 53rd Road Maspeth,NY 11378'
  }, function(err, ori) {
    if (!err) {
      var origin = ori.json.results[0].geometry.location;
      console.log(origin);
      googleMapsClient.geocode({
        address: 'Hunter College'
      }, function(err, des) {
        if (!err) {
          var destination = des.json.results[0].geometry.location;
          console.log(destination);
          googleMapsClient.directions({
            'origin':origin,
            'destination':destination,
            'mode': 'transit'
          }, function(err, response) {
            if (!err) {
              res.send(response.json);
            }
            else{
              console.log(err)
            }
          });
        }
        else{
          console.log(err)
        }
      });
    }
    else{
      console.log(err)
    }
  });
});
*/
module.exports = router;
