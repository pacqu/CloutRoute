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

router.get('/allstops', function(req, res, next) {
  mta.stop().then(function (result) {
    res.json(result);
  });
});

//get stop given id

module.exports = router;
