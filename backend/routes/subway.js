var express = require('express');
var router = express.Router();
var Mta = require('mta-gtfs');
var mta = new Mta({
  key: 'cc3537155e021e4df858abb7bd3acaa2', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

/*
Functions for:
- Getting Station Info To Produce Drop Down - DONE
- Adding Station to User => In Users, Need State that holds username  - DONE
- Gettin Train Times from Station => Parse through JSON holding station_ids (Get all info associated with user) - NOT DONE
*/

router.get('/allstops', function(req, res, next) {
  mta.stop().then(function (result) {
    res.json(result);
  });
});

router.get('/stop/:stop_id', function(req, res, next) {
  console.log(req.params.stop_id);
  mta.stop(req.params.stop_id).then(function (result) {
    res.json(result);
  });
});

//get stop given id

module.exports = router;
