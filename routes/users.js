"use strict";
let express = require('express');
let router = express.Router();
let multer = require('multer');
let upload = multer({ dest: 'uploads/' }); // for parsing multipart/form-data and save files uploaded
let user = require('../schema/users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  if('https' == req.protocol){
      res.status(200).send('secured, respond with a resource');
  }else{
      res.status(200).send('unsecured, respond with a resource');
  }
});


// get all users
router.get('/getUsers', function(req,res,next){
  console.log("request made from ip: ", req.ip);
  let allUsers = user.User.find(function (err, users) {
      if (err) return console.error(err);
      if(typeof users === "undefined" || users === null || users == ""){
          res.status(200).send("no users was found");
      }else{
          res.status(200).json(users);
      }
  })

});

// get user by params
router.get('/getUser/:userName', function(req,res,next){
    user.User.findOne({ 'name': req.params.userName }, function (err, userFound) {
        if (err) return console.error(err);
        if(typeof userFound === "undefined" || userFound === null || userFound == ""){
            res.status(200).send("no user was found with the params sent");
        }else{
            res.status(200).json(userFound);
        }
    });
});


// create user
router.get('/createUser', function(req,res,next){
    let newUser = new user.User({ name: 'wooo', email: 'blabla@gmail.com'});
    newUser.save(function (err, newUser) {
        if (err) return console.error(err);
        res.status(200).json(newUser);
    });
});

module.exports = router;
