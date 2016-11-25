var express = require('express');
var router = express.Router();

//Register
router.get('/register', function(req, res){
  res.render('register');
})

//Login
router.get('/login', function(req, res){
  res.render('login');
})

//Register User
router.post('/register', function(req, res){
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  req.checkBody('name', 'name is required').notEmpty();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('email', 'email is required').notEmpty();
  req.checkBody('email', 'email is required').isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  req.checkBody('password2', 'password do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('register', {
      errors: errors
    })
  }
  else{
    console.log("PASSED")
  }
})
module.exports = router;
