var express = require('express');
var router = express.Router();
var Mta = require('mta-gtfs');
var mta = new Mta({
  key: 'cc3537155e021e4df858abb7bd3acaa2', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

/* GET home page. */
router.get('/', function(req, res, next) {
  mta.stop(635).then(function (result) {
  console.log(result);
});
  // mta.schedule(635, 1).then(function (result) {
  //   console.log(result.schedule['']);
  // });
  /*mta.status('subway').then(function (result) {
    console.log(result);
  });*/
});

module.exports = router;
