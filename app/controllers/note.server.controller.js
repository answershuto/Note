var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var Users = mongoose.model('Users');
var qs = require('querystring');
var fs = require('fs');

module.exports = {
	create: function(req, res, next){
		var params = req.body.params;
		var cfg = {
        	localTime: new Date().toLocaleString(),
        	userName: req.session.user.userName,
        	title: params.title,
        	text: params.value
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
				res.send({
							result: true,
							params: {}
						});
        	}
        });
	},

	queryAll: function(req,res,next){
		Note.find({userName:req.session.user.userName},function(err,doc){
			if (err) {
				return next(err);
			};
			res.json(doc);
		})
	},

	delete: function(req,res,next){
		var delObj = {
			userName: req.session.user.userName,
			localTime: req.body.localTime
		}
		Note.remove(delObj,function(err){
    		if (err) {
    			console.log('err',err);
            	return next(err);
    		}
    		else{
    			console.log('delete ' + JSON.stringify(delObj) + 'successed!');
    			res.status(200);
    			res.send('delete successed');
    		}
    	})
	},

	modify: function(req,res,next){
		Note.findById(req.body._id,function(err,d){
			d.title = req.body.title;
			d.text = req.body.text;
			console.log(d.userName,req.session.user.userName)
			if (req.session.user.userName !== req.session.user.userName) {
				/*如果用户对应不上直接返回错误*/
				console.log('modify user err!');
				res.send('modify failed!');
				return;
			};

			d.save(function(err){
				if (err) {
					res.send('modify err!'+err);
				}
				else{
					console.log('modify ' + JSON.stringify(d) + 'successed!');
					res.status(200);
					res.send('modify successed!');
				}
			})
		})
		
	},

	register: function(req,res,next){
		var data="";
        req.on("data",function(postdata){
            data+=postdata; 
        });
        req.on("end",function(){
            obj = qs.parse(data);

            var user = new Users(obj);
            user.save(function(err){
            	if (err) {
            		console.log('register err!');
            		res.send('register err!');
            		return next(err);
            	}
            	else{
            		console.log('register '+ JSON.stringify(obj) +' successed!');
            		res.send('<span>注册成功，</span><a href="/index.html">点击这里</a><span>跳转...</span>');
            	}
            })

            
        });
	},

	login: function(req,res,next){
		var params = req.body.params;
		Users.find({userName:params.UserName},{userName:1,passWord:1,eMail:1},{},function(err,result){
			if (err) {
				console.log('login find err!');
				return next(err);
			}
			else{
				if ((result.length !== 0) && (result[0].passWord === params.Password)) {
					req.session.user = {'userName': params.UserName};
					res.send({
						result: true,
						params: result[0]
					});
				}
				else{
					res.send('login failed');
				}
			}
		})
	}
}
