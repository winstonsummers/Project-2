var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();

router.get('/newbook', function(req,res){
	res.render('book/newbook');
});

router.get('/newbook', function(req, res) {
	 request({
    url: 'http://openlibrary.org/',
    q: req.body.userinput,
    limit: 8
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body);
      console.log(dataObj);
    }
  });
});

router.get('/library', function(req,res){
  res.render('book/library');
});





module.exports = router;