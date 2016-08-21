var React = require('react');
var NoteWrite = require('./write.react');
var Home = require('./Home.react');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var NoteApp = React.createClass({
	getInitialState: function(){
		return {
			className : 'ui-display-none',
			userInformation: 'user'
		}
	},

	componentDidMount: function(){
		NoteStores.addListener('login',this.onLogin);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('login',this.onLogin);
	},

	render: function(){
		return <div className={this.state.className}>
			<Home userInformation={this.state.userInformation} />
		</div>

		/*
			<NoteWrite />
		*/
	},

	onLogin: function(isSuccess,params){
		if (isSuccess) {
			this.setState(update(this.state,{
				className:{$set: ''},
				userInformation:{$set: params}
			}));
		};
	}
})

module.exports = NoteApp;