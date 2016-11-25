// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);
// var fs = require('fs');
// var ent = require('ent'); // permet de bloquer les caractères HTML
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var mongo = require('mongo');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

var routes  = require('./routes/index');
var users = require('./routes/users');

//Init App
var app  = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
//https://www.npmjs.com/package/express-session
app.use(session({
    secret: 'QK34SQ56GGFHD65',
    //might change
    saveUninitialized: true,
    resave: true
}));

//Passport authenticate
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
//https://github.com/ctavan/express-validator ==> Middleware Option
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Connect flash
app.use(flash());

//Global vars
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

app.use('/', routes);
app.use('/users', users);

//Set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port' + app.get('port'));
})
//server.listen(8080);
