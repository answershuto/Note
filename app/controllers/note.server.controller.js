var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var Users = mongoose.model('Users');
var qs = require('querystring');
var fs = require('fs');
var formidable = require("formidable");

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
			res.json({result: true,params:doc});
		})
	},

	query: function(req,res,next){
		var params = req.body.params;

		Note.find({userName:req.session.user.userName},function(err,doc){
			if (err) {
				return next(err);
			};

			var result = [];
			doc.forEach(function(item,index){
				if ((item.title && item.title.indexOf && item.title.indexOf(params.condition)>=0)
					|| (item.text && item.text.indexOf && item.text.indexOf(params.condition)>=0)) {
					result.push(item);console.log(item)
				};
			})
			res.json({result: true,params:result});
		})
	},

	delete: function(req,res,next){
		var params = req.body.params;
		var delObj = {
			userName: req.session.user.userName,
			localTime: params.localTime
		}
		Note.remove(delObj,function(err){
    		if (err) {
    			console.log('err',err);
            	return next(err);
    		}
    		else{
    			console.log('delete ' + JSON.stringify(delObj) + 'successed!');
    			res.status(200);
    			res.send({result:true,params:null});
    		}
    	})
	},

	modify: function(req,res,next){
		var params = req.body.params;
		Note.findById(params._id,function(err,d){
			d.title = params.title;
			d.text = params.text;
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
					res.send({result:true,params:null});
				}
			})
		})
		
	},

	register: function(req,res,next){console.log('register',req.body)
		var data="";
        req.on("data",function(postdata){
            data+=postdata; 
        });
        req.on("end",function(){
            obj = qs.parse(data);
            obj.nikeName = obj.userName;/*注册时候用户名当作昵称*/
            obj.userImage = "/image/defaultHeadPortrait.png";
            obj.Gender = 0;
            obj.age = 0;
            obj.personalizedSignature = "";
            obj.place = "";

            var user = new Users(obj);
            user.save(function(err){
            	if (err) {
            		console.log('register err!');
            		res.send('register err!');
            		return next(err);
            	}
            	else{
            		console.log('register '+ JSON.stringify(obj) +' successed!');
            		res.redirect(303, '/');/*重定向到*/
            	}
            })

            
        });
	},

	login: function(req,res,next){
		var params = req.body.params;
		Users.find({userName:params.UserName}, null,{},function(err,result){
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
	},

	uploadIcon: function(req, res, next){
		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';
		form.uploadDir = __dirname+'/../../uploadFiles/';
		form.keepExtensions = true;
		form.maxFieldsSize = 2*1024*1024;/*限制图片大小最大为2M*/

		var fileType;
		form.parse(req, function(err,fields,files){
			switch(files.image.type){
				case 'image/jpeg':
					fileType = 'jpeg';
					break;
				case 'image/png':
					fileType = 'png';
					break;
				case 'image/jpg':
					fileType = 'jpg';
					break;
			}

			if (fileType === undefined) {/*上传的图片格式没有按照指定要求*/
				res.send('uploadIcon img type err');
			};

			Users.find({userName:req.session.user.userName}, null,{},function(err,result){
				var dst = __dirname+'/../../views/userDatas/userIcon/'+req.session.user.userName+'.'+fileType;
				fs.writeFileSync(dst, fs.readFileSync(files.image.path));
		
				/*将用户头像路径存储到数据库*/
				result[0].userImage = '/userDatas/userIcon/'+req.session.user.userName+'.'+fileType;
				result[0].save(function(err){
					if (err) {
						console.log('uploadIcon userImage err!');
						res.send('uploadIcon userImage err');
					};
				})

				fs.unlinkSync(files.image.path);/*删除缓存文件*/
				res.send('uploadIcon successed');
			})
		})
	},

	getUserInformation: function(req,res,next){
		Users.find({userName:req.session.user.userName}, null,{},function(err,result){
			if (err) {
				consoel.log('getUserInformation Users.find err!');
				res.send({result: false, params:null});
				return;
			};
			
			res.send({result: true,params:result[0]});
		})
		
	}




}
