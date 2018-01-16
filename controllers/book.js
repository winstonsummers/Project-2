var express = require('express');
var request = require('request-promise');
var db = require('../models');
var router = express.Router();

router.get('/newbook', function(req, res) {
    console.log(req.query.userinput);
    var qs = {
        q: req.query.userinput,
        limit: 8
    };
    console.log(qs);
    request({
        url: 'http://openlibrary.org/search.json',
        qs: qs
    }, function(err, res, body) {
        if (!err && res.statusCode == 200) {
          var books = JSON.parse(body);
          // console.log(body);
        } else{
          console.log(err);
        }
    }).then(function(books){
      console.log(books.length);
      console.log(typeof(books));
      books = JSON.parse(books);
      res.render('book/newbook', {books: books});
    });
});

router.post('/newbook', function(req, res){
  db.author.findCreateFind({
    where: { name: book.author_name}
  });
  db.author.findCreateFind({
    where: { title: book.title },
    defaults: { coverurl: book.cover_i }
  });
});

router.get('/library', function(req, res) {
    db.book.findAll({
      include:[{
        model: db.user,
        through: {
          attributes: ['userId'],
          where:{
            userId: req.user.id
          }
        }
      }]
    }).then(function(books){
      res.render('book/library', {results: books});
    });
});





module.exports = router;