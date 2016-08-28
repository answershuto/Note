var NoteConstants = require('../constants/NoteConstants');
var NoteDispatcher = require('../dispatcher/NoteDispatcher');
var CommonJS = require('../../common')

const refreshTime = 1000 * 10;
var refreshFunc = function(){
	CommonJS.ajax("/note/queryAll","post",{},function(res){
		NoteActionts.show(res);
	});
}

//var timer = setInterval(refreshFunc,refreshTime);/*启定时器轮训*/

var NoteActionts = {
	create: function(d){
		var dispatcher=function(isSuccess){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_CREATE,
		      isSuccess: isSuccess
		    });
		}

		var ajaxFunc = function(ret){
			return function(res){console.log(res)
				if (res.result) {
					dispatcher(ret);
				}
				else{
					dispatcher(false);
				}
			}
		}

		CommonJS.ajax("/note/create",'post', d,ajaxFunc(true),ajaxFunc(false));
	},
	show: function(titles){
		NoteDispatcher.dispatch({
	      actionType: NoteConstants.NOTE_TITLES,
	      titles: titles
	    });
	},
	queryAll: function(){
		refreshFunc();
	},
	query: function(condition){
		CommonJS.ajax("/note/query","post",{condition:condition}, function(res){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_QUERYRESULT,
		      res: res
		    });
		});
	},
	delete: function(date){
		CommonJS.ajax("/note/delete","post",{'localTime':date},refreshFunc);
	},
	modify: function(date){
		CommonJS.ajax("/note/modify","post",date,refreshFunc);
	},
	login: function(date){
		var dispatcher = function(isSuccess,params){
			NoteDispatcher.dispatch({
		      actionType: NoteConstants.NOTE_LOGIN,
		      isSuccess: isSuccess,
		      params: params
		    });
		}

		CommonJS.ajax("/note/login","post",date, function(res){
			dispatcher(res.result, res.params);
		});
	},
	navigation: function(moduleType,headText){
		NoteDispatcher.dispatch({
	      actionType: NoteConstants.NOTE_NAVIGATION,
	      moduleType: moduleType,
	      headText: headText
	    });
	},
	updateUserInformation: function(){
		CommonJS.ajax("/note/getUserInformation","post",null, function(res){
			if (res.result) {
				NoteDispatcher.dispatch({
			      actionType: NoteConstants.NOTE_UPDATE_USER_INFORMATION,
			      params: res.params
			    });
			};
		});
	}
}

module.exports = NoteActionts;