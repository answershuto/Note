var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var SetupInformation = require('./SetupInformation.react')

const members = [
	{
		key: "用户名",
		value: "userName",
		isSupoortEdit: false
	},
	{
		key: "昵称",
		value: "nikeName",
		isSupoortEdit: true
	},
	{
		key: "e-mail",
		value: "eMail",
		isSupoortEdit: true
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
									informationValue={this.state.userInformation[item.value]}
									isSupoortEdit={item.isSupoortEdit} />)
		}.bind(this))
		return <div>
			{informations}
		</div>
	}
})

module.exports = Setup;