var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name:{
  	type: String,
  	required: true
  }

});

module.exports = mongoose.model('post', PostSchema);
