var mongoose = require('mongoose');
var Note = mongoose.model('Note');

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
					res.send('modify successed!');
				}
			})
		})
		
	}
}
