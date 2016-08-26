var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var SetupInformation = require('./SetupInformation.react')

const members = [
	{
		key: "头像",
		userInformation: "userImage",
		isImage: true,
		isSupoortEdit: true
	},
	{
		key: "用户名",
		userInformation: "userName",
		isSupoortEdit: false
	},
	{
		key: "昵称",
		userInformation: "nikeName",
		isSupoortEdit: true
	},
	{
		key: "e-mail",
		userInformation: "eMail",
		isSupoortEdit: false
	},
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
									informationKey={item.key} 
									informationValue={this.state.userInformation[item.userInformation]}
									isSupoortEdit={item.isSupoortEdit} 
									isImage={item.isImage}/>)
			}.bind(this))
		return <div>
			{informations}
		</div>
	}
})

module.exports = Setup;