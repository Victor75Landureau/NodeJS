var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose connect("mongo://localhost/loginapp");
var db = mongoose.connection;

//User Schema
var UserSchema = mongoose Schema({
    name {
      type: String,
    }
    username {
      index: true
      type: String,
    }
    email {
      type: String,
    }
    password {
      type: String,
    }

})
