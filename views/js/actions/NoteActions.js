var NoteConstants = require('../constants/NoteConstants');
var NoteDispatcher = require('../dispatcher/NoteDispatcher');

var timer = setInterval(function(){
	$.ajax({
		type: 'post',
		url: "/note/queryAll",
		success: function(res){
			NoteActionts.show(res);
		},
		async: true,
		error: function(err){
			
		}
	})
},1000)

var NoteActionts = {
	create: function(d){
		var dispatcher=function(isSuccess){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_CREATE,
		      isSuccess: isSuccess
		    });
		}

		$.ajax({
			type: 'post',
			url: "/note/create",
			data: d,
			success: function(res){
				dispatcher(true);
			},
			async: true,
			error: function(err){
				dispatcher(false);
			}
		})
	},
	show: function(titles){
		NoteDispatcher.dispatch({
	      actionType: NoteConstants.NOTE_TITLES,
	      titles: titles
	    });
	}
}

module.exports = NoteActionts;