var express = require('express');
var router = express.Router();

//sqlite3 database holding user data
var sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, '../database/users.db')
var db = new sqlite3.Database(dbPath);

//bcrypt for password storage/verification: https://www.abeautifulsite.net/hashing-passwords-with-nodejs-and-bcrypt
const bcrypt = require('bcrypt');


//Initializing DB if necessary
db.serialize(function() {
  db.run("DROP TABLE IF EXISTS users");
  db.run("CREATE TABLE IF NOT EXISTS users"
  + "(username TEXT NOT NULL PRIMARY KEY,"
  + "password TEXT NOT NULL,"
  + "city TEXT NOT NULL,"
  + "routeJson TEXT NOT NULL,"
  + "subwayStopsJson TEXT NOT NULL,"
  + ")");
  /*
  bcrypt.hash('postword',10).then(function(hash){
    db.run("INSERT INTO users (username, password) VALUES (?, ?)",['Posty',hash]);
  }).then(function(){
    db.each("SELECT * FROM users", function(err,row){
      console.log(row);
    });
  });*/
});

//Function Checks if User with Given Username Already Exists
function userExists(username, callback){
  db.get("SELECT * FROM users WHERE username=?",[username],function(err,res){
    if (callback) callback(res);
    if (res === undefined){
      console.log('dis undefined');
      return false
    }
    else return true;
  })
}

//Checks if Combination of User and (Un-Hashed)Password Already Exist
function userPassExists(username, unhashedpass, callback){
  userExists(username, function(result){
    if (result === undefined){
      if (callback) callback(false);
      return false;
    }
    else{
      var hashedpass = result.password;
      bcrypt.compare(unhashedpass, hashedpass, function(err, res) {
        console.log('dis password is: ' + res)
        if (callback) callback(res);
        return res;
      });
    }
  });
}
/* Function to Register User into User Database*/
router.post('/newuser', function(req, res, next) {
  //console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var city = req.body.city;
  //Check if username already exists
  userExists(username, function(result){
    //Username Doesn't Already Exist
    if (result){
      res.json({'signup-success': false});
    }
    //User Doesn't Exist
    else{
      //Hashing Password for secure storage
      bcrypt.hash(password,10).then(function(hashedPass){
        db.run("INSERT INTO users (username, password, city, routeJson, subwayStopsJson) VALUES (?, ?, ?, ?, ?)",[username,hashedPass, city, '{}', '{}']);
      }).then(function(){
        res.json({'signup-success': true});
        /*db.all("SELECT * FROM users", function(err, all){
          res.send(all);
        }); */
      });
    }
  });
});

/* Fuction Called to Check if User with given Username and Password Exists*/
router.post('/verifyuser', function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  userPassExists(username,password,function(result){
    res.json({'login-success': result});
  });
});

//HANDLE CLOSING DB ON CLOSING APP
process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) {
      db.close();
      console.log("Goodbye!");
    }
    if (err) {
      db.close();
      console.log(err.stack);
    }
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));
//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));
//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));


module.exports = router;
