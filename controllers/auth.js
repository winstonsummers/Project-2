var express = require('express');
var passport=require('../config/passportConfig');
var db=require('../models');
var router = express.Router();

router.get('/login', function(req, res){
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Login Successful!',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid Credentials'
}));

router.get('/signup', function(req,res){
	res.render('auth/signup');
});

router.post('/signup', function(req,res,next){
	console.log('req.body is', req.body);
	db.user.findOrCreate({
		where: {email: req.body.email},
		defaults: {
			username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password,
			imgurl: req.body.imgurl
		}
	}).spread(function(user, wasCreated){
		if(wasCreated){
			//didn't find duplicate
			passport.authenticate('local', {
				successRedirect: '/profile',
				successFlash: 'You logged in for the first time!'
			})(req,res,next);
		}else{
			//tried to make duplicate
			req.flash('error', 'Email already exsists, Bro!');
			res.redirect('/auth/login');
		}
	}).catch(function(err){
		req.flash('error', err.message);
		res.redirect('/auth/signup');
	});
});

router.get('/logout', function(req,res){
	req.logout();
	req.flash('success', 'Successfully logged out');
	res.redirect('/');
});

module.exports = router;