var mongoose = require('mongoose');

/*笔记表*/
var Schema = new mongoose.Schema({
	date: {type:Date,default:Date.now},
	userName: String,
	localTime: String,
	title: String,
	text: String
})

var News = mongoose.model('Note', Schema);

/*用户表*/
var SchemaUser = new mongoose.Schema({
	userName: String,
	passWord: String,
	eMail: String
})

var Users = mongoose.model('Users', SchemaUser);