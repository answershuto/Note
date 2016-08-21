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
		NoteStores.addListener('create',this._onClick);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('create',this._onClick);
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
				<input className="ui-noteInput-input" type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="标题"></input>
				<a className="ui-noteInput-btn btn btn-success" onClick={this.handleClick}>记录</a>
			</div>
			<div>
				<textarea 
					 onChange={this.handleTextChange} 
					 className="ui-noteInput-textarea"
					 value={this.state.value}
					 style={{
					 	height: $(window).height()*3/4,
					 	width: $(window).width()*4/5,
					}}
				></textarea>
			</div>
		</div>
	},

	handleClick: function(){
		if (this.state.title === "") {
			alert('标题不能为空');
			return;
		}
		else if (this.state.value === "") {
			alert('内容不能为空');
			return;
		};

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