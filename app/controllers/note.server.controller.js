var mongoose = require('mongoose');
var Note = mongoose.model('Note');

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
	            	localTime: new Date().toLocaleString(),
	            	title: dataObj['title'],
	            	text: dataObj['value']
	            }

	            var note = new Note(cfg);
	            note.save(function(err){
	            	if (err) {
	            		console.log('err',err);
	            		return next(err);
	            	}
	            	else{
	            		console.log('save cfg:'+JSON.stringify(cfg)+' successed!');
	            		res.status(200);
						res.send('create successed');
	            	}
	            })
	            
	            
	        });


		}
	},
	queryAll: function(req,res,next){
		Note.find({},function(err,doc){
			if (err) {
				return next(err);
			};
			res.json(doc);
		})
	}
}
