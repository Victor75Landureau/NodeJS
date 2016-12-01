var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//User Schema
var UserSchema = mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    username: {
      index: true,
      type: String
    },
    password: {
      type: String,
    }
})

var user = module.exports = mongoose.model('user', UserSchema)

//https://www.npmjs.com/package/bcryptjs
module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        // Store hash in your password DB.
        newUser.password = hash;
        newUser.save(callback);
    });
});

}
