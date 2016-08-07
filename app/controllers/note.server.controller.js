var mongoose = require('mongoose');
var Note = mongoose.model('Note');

var Cfg = [];

module.exports = {
	create: function(req, res, next){

		if (req.body.text) {
			console.log(req.body.text)
		}
		else{
			var data = {};
			var body = '';
	        req.on('data', function (chunk) {
	            body += chunk; //读取参数流转化为字符串
	        });
	        req.on('end', function () {
	            //读取参数流结束后将转化的body字符串解析成 JSON 格式
	            var dataObj = JSON.parse(body);

	            var cfg = {
	            	'Date': new Date().toLocaleString(),
	            	'Title': dataObj['title'],
	            	'Text': dataObj['value']
	            }

	            Cfg.push(cfg);
	            console.log('save cfg:'+JSON.stringify(cfg)+' successed!');


	            res.status(200);
				res.send('create successed');
	        });


		}
		// var news = new News({
		// 	title: "bbb",
		// 	content: "content bbb"
		// });
		
		// news.save(function(err){
		// 	if (err) {
		// 		return next(err);
		// 	};

		// 	res.json(news);
		// });

		//res.send('create!\n');
	},
	queryAll: function(req,res,next){
		res.send(Cfg)
	}
}
