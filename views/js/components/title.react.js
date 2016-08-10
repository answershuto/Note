var React = require('react');

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
			<div className="ui-del-div ui-float-right glyphicon glyphicon-remove"></div>
			<div className="ui-clear-both"></div>
		</div>
	}
})

module.exports = NoteShow;