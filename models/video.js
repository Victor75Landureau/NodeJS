var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Schema table
var VideoSchema = mongoose.Schema({
  video_name: {
    type: String,
    index: true
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
