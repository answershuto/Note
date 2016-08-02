var React = require('react');
var NoteActions = require('../actions/NoteActions')

var NoteWrite = React.createClass({
	
	getInitialState: function(){
		return {
			value: this.props.value || ""
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div>
			<textarea type="text" className="ui-noteInput-textarea" onChange={this.handleTextChange}></textarea>
			<a className="ui-noteInput-btn btn btn-success" onClick={this.handleClick}>记录</a>
		</div>
	},

	handleClick: function(){
		NoteActions.create(this.state.value);
	},

	handleTextChange: function(e){
		this.setState({
			value: e.target.value
		})
	}
})

module.exports = NoteWrite;