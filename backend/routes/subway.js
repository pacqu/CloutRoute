var express = require('express');
var router = express.Router();
var Mta = require('mta-gtfs');
var mergeJSON = require("merge-json") ;
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
  var feedIds = [1,26,16,21,2,11,31,36,51];
  var jsonToBeReturned = {};
  var counter = 0;
  feedIds.forEach(function(feedId, index){
    mta.schedule(req.params.stop_id,feedId).then(function (result) {
      //console.log(result);
      if (result["schedule"] == undefined){
        //jsonToBeReturned = mergeJSON.merge(jsonToBeReturned,result);
        console.log("empty result" + index);
      }
      else{
        jsonToBeReturned = mergeJSON.merge(jsonToBeReturned, result["schedule"][req.params.stop_id]);
      }
      counter++;
    }).then(function(){
      if(feedIds.length == counter){
        console.log(jsonToBeReturned);
        res.json(jsonToBeReturned);
      }
    });
  });
});

//get stop given id

module.exports = router;
