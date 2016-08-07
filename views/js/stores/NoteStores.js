var NoteDispatcher = require('../dispatcher/NoteDispatcher');
var NoteConstants = require('../constants/NoteConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var NoteStore = assign({}, EventEmitter.prototype, {
	addListener: function(eventType,callback){
		this.on(eventType,callback);
	},
	delListener: function(eventType,callback){
		this.removeListener(eventType,callback);
	},
	eventEmit: function(eventType){
		this.emit.apply(this,arguments);
	}
});


NoteDispatcher.register(function(action){
	switch(action.actionType){
		case NoteConstants.NOTE_CREATE:
			NoteStore.eventEmit('click',action.isSuccess);
			break;
		case NoteConstants.NOTE_TITLES:
			NoteStore.eventEmit('show',action.titles);
			break;
		default:
			break;
	}
});

module.exports = NoteStore;