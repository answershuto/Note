var React = require('react');
var NoteActions = require('../actions/NoteActions')

var NoteShow = React.createClass({
	
	getInitialState: function(){
		return {
			
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className={this.props.bgClass}>
			<div className="ui-width-900 ui-float-left">
				<div>
					<span>时间：</span>
					<span>{this.props.date}</span>
				</div>
				<div>
					<span>标题：</span>
					<span>{this.props.title}</span>
				</div>
				<div>
					<span>内容：</span>
					<span>{this.props.text}</span>
				</div>
			</div>
			<div className="ui-float-right">
				<div className="ui-del-div glyphicon glyphicon-trash" onClick={this.handleDelClick.bind(this)}></div>
				<div className="ui-modify-div glyphicon glyphicon-pencil" onClick={this.handleModifyClick.bind(this)}></div>
			</div>
			<div className="ui-clear-both"></div>
		</div>
	},

	handleDelClick: function(){
		NoteActions.delete(this.props.date);
	},

	handleModifyClick: function(){
		NoteActions.modify();
	}
})

module.exports = NoteShow;