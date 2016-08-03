var NoteConstants = require('../constants/NoteConstants');
var NoteDispatcher = require('../dispatcher/NoteDispatcher');


var NoteActionts = {
	create: function(text){
		var dispatcher=function(isSuccess){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_CREATE,
		      isSuccess: isSuccess
		    });
		}

		$.ajax({
			type: 'post',
			dataType: 'json',
			url: "/note/create",
			data: {'text':text},
			success: function(res){
				dispatcher(true);
			},
			async: true,
			error: function(err){
				dispatcher(false);
			}
		})
	}
}

module.exports = NoteActionts;