var express = require('express');
var router = express.Router();

var Video = require('../models/video');

// Get Homepage
// router.get('/', ensureAuthenticated, function(req, res){
router.get('/', function(req, res){
	res.render('index');
});

// Get Video page
router.get('/video', function(req, res){
	res.render('video');
});

//Add Video
router.post('/video', function(req, res){
	var video_title = req.body.video_title;
	var video_link = req.body.video_link;

	//Validation
	req.checkBody('video_title','Title is required').notEmpty();
	req.checkBody('video_link','Link is required').notEmpty();

	var errors = req.validationErrors();
	if(errors){
		console.log('Errors:', {errors});
		res.render('video');
	}else {
		var newVideo = new Video({
			video_title:video_title,
			video_link:video_link
		});

		Video.createVideo(newVideo, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'Your video has been loaded');

		res.redirect('video');
	}
});

// Get Contact page
router.get('/contact', function(req, res){
	res.render('contact');
});
// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 	}
// }

module.exports = router;
