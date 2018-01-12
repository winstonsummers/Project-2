var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();

router.get('/newbook', function(req,res){
	res.render('booky/newbook');
});

router.get('/newbook', function(req, res) {
	var search = {
		q: 'Lord of the Rings'
	}
	 request({
    url: 'http://openlibrary.org/',
    q: search
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body);
      console.log(dataObj);
    }
  });
});







module.exports = router;