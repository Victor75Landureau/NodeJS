var app  = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var ent = require('ent'); // permet de bloquer les caractères HTML
var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var mongo = require('mongo');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;



// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
})
.get('/home', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
})
.get('/news', function (req, res) {
  res.sendFile(__dirname + '/views/news.html');
})
.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/views/contact.html');
})
.get('/about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html');
})
.get('/login', function (req, res) {
  res.sendFile(__dirname + '/views/login.html');
})

app.use(express.static(path.join(__dirname, 'public')))

//Login Authentification
// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

//chargement du server
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
// io.sockets.on('connection', function (socket) {
//
//     socket.on('petit_nouveau', function(pseudo) {
//     socket.pseudo = pseudo;
//     console.log('Connection de ' + socket.pseudo);
//     });
//
//     //Message commun
//     socket.broadcast.emit('message', socket.pseudo + ' vient de se connecter !');
//
//     // Quand le serveur reçoit un signal de type "message" du client
//     socket.on('message', function (message) {
//         console.log(socket.pseudo + ' a ecrit : ' + message);
//     });
// });

server.listen(8080);
