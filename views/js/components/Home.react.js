var React = require('react');
var NoteActions = require('../actions/NoteActions');
var Show = require('./show.react');
var Write = require('./write.react');
var User = require('./user.react');
var Head = require('./head.react');
var Search = require('./Search.react');
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
				showModule = <div>
					<Head text="新建笔记" />
					<Write />
				</div>
				break;
			case 'showNote':
				NoteActions.queryAll();
				showModule = <div>
					<Head text="查看笔记" />
					<Show />
				</div>
				break;
			case 'findNote':
				showModule = <div>
					<Head text="搜索笔记" />
					<Search />
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

	_onNavigation: function(moduleType){
		this.setState(update(this.state,{moduleType:{$set: moduleType}}));
	}
})

module.exports = Home;