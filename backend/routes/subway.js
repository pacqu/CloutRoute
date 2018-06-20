var express = require('express');
var router = express.Router();
var Mta = require('mta-gtfs');
var mta = new Mta({
  key: 'cc3537155e021e4df858abb7bd3acaa2', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

/*
Functions for:
- Getting Station Info To Produce Drop Down
- Adding Station to User => In Users, Need State that holds username
- Gettin Train Times from Station Infro => Parse through JSON holding station_ids
*/

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
