var React = require('react');
var NoteActions = require('../actions/NoteActions');
var Show = require('./show.react');
var Write = require('./write.react');
var User = require('./user.react');
var Head = require('./head.react');
var Edit = require('./edit.react');
var Search = require('./Search.react');
var userInformation = require('./userInformation')
var Navigation = require('./Navigation.react');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var NoteShow = require('./show.react');
var Setup = require('./Setup.react');

var Home = React.createClass({
	
	getInitialState: function(){
		return {
			userInformation: this.props.userInformation || {},
			moduleType: 'main',
			headText: ""
		};
	},

	componentWillReceiveProps: function(newProps){
		this.setState(update(this.state,{
			userInformation:{$set: newProps.userInformation}
		}));
	},

	componentDidMount: function(){
		NoteStores.addListener('navigation',this._onNavigation);
		NoteStores.addListener('updateUserInformation',this._onUpdateUserInformation);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('navigation',this._onNavigation);
		NoteStores.delListener('updateUserInformation',this._onUpdateUserInformation);
	},

	render: function(){
		var showModule = <div></div>;
		
		switch(this.state.moduleType){
			case 'newNote':
				showModule = <div>
					<Head text="新建笔记" />
					<Write />
				</div>
				break;
			case 'showNote':
				NoteActions.queryAll();
				showModule = <div>
					<Head text="查看笔记" returnPage="main" />
					<Show />
				</div>
				break;
			case 'findNote':
				showModule = <div>
					<Head text="搜索笔记" returnPage="main" />
					<Search />
				</div>
				break;
			case 'setup':
				showModule = <div>
					<Head text="设置" returnPage="main" />
					<Setup userInformation={this.state.userInformation} />
				</div>
				break;
			case 'edit':
				showModule = <div>
					<Head text={userInformation[this.state.headText]} returnPage="setup" />
					<Edit editType={this.state.headText} userInformation={this.props.userInformation} />
				</div>
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

	_onNavigation: function(moduleType,headText){
		this.setState(update(this.state,{
											moduleType:{$set: moduleType},
											headText:{$set: headText}
										}));
	},

	_onUpdateUserInformation: function(params){
		params.userImage += '?'+Math.random();
		this.setState(update(this.state,{userInformation:{$set: params}}));
	}
})

module.exports = Home;