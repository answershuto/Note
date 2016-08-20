var React = require('react');
var NoteActions = require('../actions/NoteActions');
var User = require('./user.react');
var Navigation = require('./Navigation.react');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var NoteShow = require('./show.react');

var Home = React.createClass({
	
	getInitialState: function(){
		return {
			
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div>
			<User />
			<Navigation />
		</div>
	}
})

module.exports = Home;