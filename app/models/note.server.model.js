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
	userName: String,					/*用户名*/
	passWord: String,					/*密码*/
	eMail: String,						/*邮箱*/
	nikeName: String,					/*昵称*/
	userImage: String,					/*头像*/
	Gender: String,						/*性别 0-男 1-女*/
	age: String,						/*年龄*/
	personalizedSignature:String,		/*个性签名*/
	place: String						/*所在区域*/
})

var Users = mongoose.model('Users', SchemaUser);