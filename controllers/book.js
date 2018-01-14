var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();

router.get('/newbook', function(req,res){
	res.render('book/newbook');
});

router.get('/newbook/search', function(req, res) {
  console.log(req.body.userinput);
	 var qs = {
    s: req.body.userinput
   };
   console.log(qs);
   request({
    url: 'http://openlibrary.org/seach.json?',
    qs: qs
   }, function(err, res, body){
    if (!err && res.statusCode == 200) {
      var result = JSON.parse(body);
      res.send(result);
    }
   });
});

router.get('/library', function(req,res){
  res.render('book/library');
});





module.exports = router;