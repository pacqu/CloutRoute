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
  db.run("CREATE TABLE IF NOT EXISTS users"
  + "(username TEXT NOT NULL PRIMARY KEY,"
  + "password TEXT NOT NULL"
  + ")");
  db.run("DELETE from users");
  /*
  bcrypt.hash('postword',10).then(function(hash){
    db.run("INSERT INTO users (username, password) VALUES (?, ?)",['Posty',hash]);
  }).then(function(){
    db.each("SELECT * FROM users", function(err,row){
      console.log(row);
    });
  });*/
});

/* GET users listing. */
router.post('/newuser', function(req, res, next) {

  //console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  bcrypt.hash(password,10).then(function(hashedPass){
    db.run("INSERT INTO users (username, password) VALUES (?, ?)",[username,hashedPass]);
  }).then(function(){
    db.all("SELECT * FROM users", function(err, all){
      res.send(all);
    });
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
