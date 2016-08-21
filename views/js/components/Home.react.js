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
			userInformation: this.props.userInformation || {}
		};
	},

	componentWillReceiveProps: function(newProps){
		this.setState(update(this.state,{
			userInformation:{$set: newProps.userInformation}
		}));
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div>
			<User userInformation={this.state.userInformation} />
			<Navigation />
		</div>
	}
})

module.exports = Home;