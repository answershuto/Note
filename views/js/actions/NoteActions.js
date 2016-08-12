var NoteConstants = require('../constants/NoteConstants');
var NoteDispatcher = require('../dispatcher/NoteDispatcher');
var CommonJS = require('../../common')

var refreshFunc = function(){
	CommonJS.ajax("/note/queryAll","post","",function(res){
		NoteActionts.show(res);
	});
}

var timer = setInterval(refreshFunc,1000)

var NoteActionts = {
	create: function(d){
		var dispatcher=function(isSuccess){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_CREATE,
		      isSuccess: isSuccess
		    });
		}

		var ajaxFunc = function(ret){
			return function(res){
				dispatcher(ret);
			}
		}

		CommonJS.ajax("/note/create",'post',JSON.stringify(d),ajaxFunc(true),ajaxFunc(false));
	},
	show: function(titles){
		NoteDispatcher.dispatch({
	      actionType: NoteConstants.NOTE_TITLES,
	      titles: titles
	    });
	},
	delete: function(date){
		CommonJS.ajax("/note/delete","post",date,refreshFunc);
	},
	modify: function(){
		CommonJS.ajax("/note/modify","post","");
	}
}

module.exports = NoteActionts;