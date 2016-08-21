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
			userInformation: this.props.userInformation || {},
			moduleType: 'main'
		};
	},

	componentWillReceiveProps: function(newProps){
		this.setState(update(this.state,{
			userInformation:{$set: newProps.userInformation}
		}));
	},

	componentDidMount: function(){
		NoteStores.addListener('navigation',this._onNavigation);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('navigation',this._onNavigation);
	},

	render: function(){
		var showModule = <div></div>;
		
		switch(this.state.moduleType){
			case 'newNote':
				
				break;
			case 'showNote':
				break;
			case 'findNote':
				break;
			case 'main':/*主页*/
				showModule = <div>
					<User userInformation={this.state.userInformation} />
					<Navigation />
				</div>;
				break;
		}

		return showModule;
	},

	_onNavigation: function(moduleType){
		this.setState(update(this.state,{moduleType:{$set: moduleType}}));
	}
})

module.exports = Home;