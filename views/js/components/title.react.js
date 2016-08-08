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
			{this.props.text}
		</div>
	}
})

module.exports = NoteShow;