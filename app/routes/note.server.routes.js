var NoteController = require('../controllers/note.server.controller');

module.exports = function(app){
	app.route('/')
		.get(function(req,res,next){
			res.render('index.html');
		});
	app.route('/note/create')
		.all(NoteController.create);

	app.route('/note/queryAll')
		.all(NoteController.queryAll);

	app.route('/note/delete')
		.all(NoteController.delete);

	app.route('/note/modify')
		.all(NoteController.modify);

	app.route('/note/register')
		.all(NoteController.register);

	app.route('/note/login')
		.all(NoteController.login);

	app.route('/note/query')
		.all(NoteController.query);

	app.route('/note/uploadIcon')
		.all(NoteController.uploadIcon);

	app.route('/note/getUserInformation')
		.all(NoteController.getUserInformation);
}