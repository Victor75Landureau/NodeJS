var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Schema table
var VideoSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },

  video_title: {
    type: String,
  },

  video_link: {
    type: String
  }
});

//Creation du model sur mongo
var Video = module.exports = mongoose.model('Video', VideoSchema);

//Insert video in database
module.exports.createVideo = function(newVideo, callback){
	newVideo.save(callback);
}

//Gerer l'unicité ?
//

module.exports.getVideoByTitle = function(username, callback){
	var query = {video_title: video_title};
	Video.findOne(query, callback);
}

module.exports.getVideoById = function(id, callback){
	Video.findById(id, callback);
}
