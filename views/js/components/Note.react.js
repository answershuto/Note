var React = require('react');
var NoteWrite = require('./write.react');
var NoteShow = require('./show.react');
var Home = require('./Home.react');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var NoteApp = React.createClass({
	getInitialState: function(){
		return {
			className : 'ui-display-none'
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
			<Home />
		</div>

		/*
			<NoteWrite />
			<NoteShow />
		*/
	},

	onLogin: function(isSuccess){
		if (isSuccess) {
			this.setState(update(this.state,{className:{$set: ''}}));
		};
	}
})

module.exports = NoteApp;