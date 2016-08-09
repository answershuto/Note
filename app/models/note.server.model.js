var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
	date: {type:Date,default:Date.now},
	localTime: String,
	title: String,
	text: String
})

var News = mongoose.model('Note', Schema);