var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Search = React.createClass({
	
	getInitialState: function(){
		return {
			userInformation: this.props.userInformation || {},
			moduleType: 'main'
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div>ss</div>
	}
})

module.exports = Search;