var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var update = require('react-addons-update');

var NoteWrite = React.createClass({
	
	getInitialState: function(){
		return {
			title: this.props.title || "",
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
			title: "",
			value: ""
		})
		if (isSuccess) {
			alert('记录成功！');
		}
		else{
			alert('记录失败！');
		}
	},

	render: function(){
		return <div className="ui-noteInput-div">
			<div>
				<span className="ui-noteInput-span">标题</span>
				<input className="ui-noteInput-input" type="text" onChange={this.handleTitleChange} value={this.state.title}></input>
			</div>
			<div>
				<textarea type="text" className="ui-noteInput-textarea" onChange={this.handleTextChange} value={this.state.value}></textarea>
				<a className="ui-noteInput-btn btn btn-success" onClick={this.handleClick}>记录</a>
			</div>
			<div className="ui-clear-both ui-marginB-20"></div>
		</div>
	},

	handleClick: function(){
		NoteActions.create(this.state);
	},

	handleTitleChange:function(e){
		this.setState(update(this.state,{title:{$set: e.target.value}}));
	},

	handleTextChange: function(e){
		this.setState(update(this.state,{value:{$set: e.target.value}}));
	}
})

module.exports = NoteWrite;