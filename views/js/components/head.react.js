var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Head = React.createClass({
	
	getInitialState: function(){
		return {
			text: this.props.text || ""
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className="ui-head-return-div">
			<div className="pull-left ui-head-return-icon glyphicon glyphicon-chevron-left"
				 onClick={this.handleReturnClick}></div>
			<div className="ui-head-return-text">
				<span>{this.state.text}</span>
			</div>
		</div>
	},

	handleReturnClick: function(){
		NoteActions.navigation('main');
	}
})

module.exports = Head;