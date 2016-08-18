var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var Users = mongoose.model('Users');
var qs = require('querystring');
var fs = require('fs');

module.exports = {
	create: function(req, res, next){
		var cfg = {
        	localTime: new Date().toLocaleString(),
        	title: req.body.title,
        	text: req.body.value
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
        });
	},

	queryAll: function(req,res,next){
		Note.find({},function(err,doc){
			if (err) {
				return next(err);
			};
			res.json(doc);
		})
	},

	delete: function(req,res,next){
		Note.remove(req.body,function(err){
    		if (err) {
    			console.log('err',err);
            	return next(err);
    		}
    		else{
    			console.log('delete ' + JSON.stringify(req.body) + 'successed!');
    			res.status(200);
    			res.send('delete successed');
    		}
    	})
	},

	modify: function(req,res,next){
		Note.findById(req.body._id,function(err,d){
			d.title = req.body.title;
			d.text = req.body.text;

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
		Users.find({userName:req.body.UserName},{userName:1,passWord:1,eMail:1},{},function(err,result){
			if (err) {
				console.log('login find err!');
				return next(err);
			}
			else{
				if ((result.length !== 0) && (result[0].passWord === req.body.Password)) {
					res.send(req.body.UserName+'login successed');
					req.session.user = {'username': req.body.UserName};
				}
				else{
					res.send('login failed');
				}
			}
		})
	}
}
