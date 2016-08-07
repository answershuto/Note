var React = require('react');
var NoteWrite = require('./write.react');
var NoteShow = require('./show.react');

var NoteApp = React.createClass({
	render: function(){
		return <div>
			<NoteWrite />
			<NoteShow />
		</div>
	}
})

module.exports = NoteApp;