var express = require('express');
var router = express.Router();
var Mta = require('mta-gtfs');
var mta = new Mta({
  key: 'cc3537155e021e4df858abb7bd3acaa2' // only needed for mta.schedule() method
});


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

router.get('/schedule/:stop_id', function(req, res, next) {
  mta.schedule(req.params.stop_id).then(function (result) {
    if (result == {}){
      res.json({'noTrainsScheduled': true})
    }
    res.json(result["schedule"][req.params.stop_id]);
  });
});

//get stop given id

module.exports = router;
