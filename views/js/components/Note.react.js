var React = require('react');
var NoteWrite = require('./write.react');

var NoteApp = React.createClass({
	render: function(){
		return <div>
			<NoteWrite />
		</div>
	}
})

module.exports = NoteApp;