var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var Module = require('./module.react');
var Write = require('./write.react')

var modules = [
	{
		text: "新建笔记",
		moduleType: "newNote",
		imageClass: "glyphicon glyphicon-pencil"
	},
	{
		text: "查看笔记",
		moduleType: "showNote",
		imageClass: "glyphicon glyphicon-edit"
	},
	{
		text: "搜索笔记",
		moduleType: "findNote",
		imageClass: "glyphicon glyphicon-search"
	}
];

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
		var ms = [];
		modules.forEach(function(item,index){
			ms.push(
				<div className="col-md-4 col-xs-4">
					<Module text={item.text} moduleType={item.moduleType} imageClass={item.imageClass} />
				</div>
			)
		});
		return <div className="ui-Nacigation-div">
			{ms}
		</div>
	}
})

module.exports = Navigation;