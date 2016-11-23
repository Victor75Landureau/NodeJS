var app  = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var ent = require('ent'); // permet de bloquer les caractères HTML
var path = require('path');
var express = require('express');

// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

app.use(express.static(path.join(__dirname, 'public')))

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
