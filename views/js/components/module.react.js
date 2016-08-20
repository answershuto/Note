var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Module = React.createClass({
	
	getInitialState: function(){
		return {
			iconClass: this.props.iconClass || "",
			imageClass: this.props.imageClass || "",
			text: this.props.text || ""
		};
	},

	render: function(){
		return <div className={this.state.iconClass+" ui-module-icon"}>
			<span className={this.state.imageClass+" ui-module-image"}></span>
			<span className="ui-module-text">{this.state.text}</span>
		</div>
	}
})

module.exports = Module;