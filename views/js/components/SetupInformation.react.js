var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')

var SetupInformation = React.createClass({
	
	getInitialState: function(){
		return {
			informationKey: this.props.informationKey || "",
			informationValue: this.props.informationValue || "",
			isSupoortEdit: this.props.isSupoortEdit
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className="ui-setupInformation-div">
			<div className="col-md-4 col-xs-4">
				<span>{this.state.informationKey}</span>
			</div>
			<div className="col-md-6 col-xs-6">
				<span>{this.state.informationValue}</span>
			</div>
			<div className="col-md-2 col-xs-2">
				<div className={this.state.isSupoortEdit ? "glyphicon glyphicon-chevron-right ui-setupInformation-right":"ui-display-none"}></div>
			</div>
		</div>
	}
})

module.exports = SetupInformation;