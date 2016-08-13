var NoteConstants = require('../constants/NoteConstants');
var NoteDispatcher = require('../dispatcher/NoteDispatcher');
var CommonJS = require('../../common')

const refreshTime = 1000 * 10;
var refreshFunc = function(){
	CommonJS.ajax("/note/queryAll","post","",function(res){
		NoteActionts.show(res);
	});
}
refreshFunc();/*第一次加载页面直接刷新*/

var timer = setInterval(refreshFunc,refreshTime);/*启定时器轮训*/

var NoteActionts = {
	create: function(d){
		var dispatcher=function(isSuccess){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_CREATE,
		      isSuccess: isSuccess
		    });

		    if (isSuccess) {
		    	refreshFunc();
		    };
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
		CommonJS.ajax("/note/modify","post","",refreshFunc);
	}
}

module.exports = NoteActionts;