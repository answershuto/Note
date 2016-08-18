var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

module.exports = function(){
	console.log('init express..');
	var app = express();

	app.set('view engine','ejs');
	app.use(express.static(__dirname+'/../views'));

	app.use(bodyParser.json());

	app.use(cookieParser());

	app.use(session({
		resave: false,
		saveUninitialized: true,
		secret: 'CloudNte',
		name: 'RanMoCloudNote'
	}));

	app.use(function(req,res,next){
		if (!req.session.user) {
			if (req.url === '/note/login') {
				next();/*请求为登陆则不需要校验session*/
			};
		}
		else if (req.session.user) {
			next();
		};
	})

	require('../app/routes/note.server.routes')(app);

	app.use(function(req, res, next){
		res.status(404);
		try{
			return res.json('No Found!');
		}
		catch(e){
			console.error('404 set header after send.');
		}
	})

	app.use(function(err, req, res, next){
		if (!err) {
			return next();
		};

		res.status(500);
		try{
			return res.json(err.message || "server err");
		}
		catch(e){
			console.error('500 set header after send.')
		}
	});
	

	return app;
};