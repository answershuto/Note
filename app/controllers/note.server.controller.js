var mongoose = require('mongoose');
var Note = mongoose.model('Note');


module.exports = {
	create: function(req, res, next){

		if (req.body.text) {
			console.log(req.body.text)
		}
		else{
			var data = {};
			var body = '', jsonStr;
	        req.on('data', function (chunk) {
	            body += chunk; //读取参数流转化为字符串
	        });
	        req.on('end', function () {
	            //读取参数流结束后将转化的body字符串解析成 JSON 格式
	            body.split('&').forEach(function(item,index){
	            	data[item.split('=')[0]] = item.split('=')[1];
	            });

	            console.log(data['text']);

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
	find: function(req,res,next){
		News.find({},function(err,doc){
			if (err) {
				return next(err);
			};

			res.json(doc);
		})
	}
}
