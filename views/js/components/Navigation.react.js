var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var Module = require('./module.react');

var Navigation = React.createClass({
	
	getInitialState: function(){
		return {
			
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className="ui-Nacigation-div">
			<div className="col-md-4 col-xs-4">
				<Module text="新建笔记" imageClass="glyphicon glyphicon-pencil" />
			</div>
			<div className="col-md-4 col-xs-4">
				<Module text="查看笔记" imageClass="glyphicon glyphicon-edit" />
			</div>
			<div className="col-md-4 col-xs-4">
				<Module text="搜索笔记" imageClass="glyphicon glyphicon-search" />
			</div>
		</div>
	}
})

module.exports = Navigation;