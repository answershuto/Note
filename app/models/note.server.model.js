var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
	text: String,
	date: {type:Date,default:Date.now}
})

var News = mongoose.model('Note', Schema);