var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
	date: {type:Date,default:Date.now},
	localTime: String,
	title: String,
	text: String
})

var News = mongoose.model('Note', Schema);

var SchemaUser = new mongoose.Schema({
	userName: String,
	passWord: String,
	eMail: String
})

var Users = mongoose.model('Users', SchemaUser);