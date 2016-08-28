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
		</div>
	}
})

module.exports = Setup;