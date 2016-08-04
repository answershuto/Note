var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')

var NoteWrite = React.createClass({
	
	getInitialState: function(){
		return {
			value: this.props.value || ""
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('click',this._onClick);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('click',this._onClick);
	},

	_onClick: function(isSuccess){
		this.setState({
			value: ""
		})
		if (isSuccess) {
			alert('记录成果！');
		}
		else{
			alert('记录失败！');
		}
	},

	render: function(){
		return <div>
			<textarea type="text" className="ui-noteInput-textarea" onChange={this.handleTextChange} value={this.state.value}></textarea>
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