var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var SetupInformation = require('./SetupInformation.react')

const members = [
	{
		userInformation: "userImage",
		isImage: true,
		isSupoortEdit: true
	},
	{
		userInformation: "userName",
		isSupoortEdit: false
	},
	{
		userInformation: "nikeName",
		isSupoortEdit: true
	},
	{
		userInformation: "eMail",
		isSupoortEdit: false
	},
	{
		userInformation: "place",
		isSupoortEdit: true
	},
	{
		userInformation: "personalizedSignature",
		isSupoortEdit: true
	},
	{
		userInformation: "age",
		isSupoortEdit: true
	},
	{
		userInformation: "Gender",
		isSupoortEdit: true
	}
]

var Setup = React.createClass({
	
	getInitialState: function(){
		return {
			userInformation : this.props.userInformation || {}
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		var informations = [];
		members.forEach(function(item,index){
			informations.push(<SetupInformation 
									informationKey={item.userInformation} 
									informationValue={this.state.userInformation[item.userInformation]}
									isSupoortEdit={item.isSupoortEdit} 
									isImage={item.isImage} />)
			}.bind(this));

		return <div>
			{informations}
			<div className="ui-setup-aboutUs" onClick={this.handleAboutUsClick}>关于我们</div>
			<div className="ui-setup-exit" onClick={this.handleExitClick}>退出登陆</div>
		</div>
	},

	handleExitClick: function(){
		window.location.href = '/';
	},

	handleAboutUsClick: function(){
		NoteActions.navigation("aboutUs",'pp');
	}
})

module.exports = Setup;