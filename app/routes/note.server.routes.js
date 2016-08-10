var NoteController = require('../controllers/note.server.controller');

module.exports = function(app){
	app.route('/')
		.get(function(req,res,next){
			res.render('index.html');
		});
	app.route('/note/create')
		.post(NoteController.create);

	app.route('/note/queryAll')
		.all(NoteController.queryAll);

	app.route('/note/delete')
		.post(NoteController.delete);
}