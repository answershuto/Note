var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var NoteTitle = require('./title.react')

var NoteShow = React.createClass({
	
	getInitialState: function(){
		return {
			titles: []
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('show',this._onShow);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('show',this._onShow);
	},

	_onShow: function(titles){
		this.setState({
			titles: titles
		})
	},

	render: function(){
		var items = [];
		this.state.titles.forEach(function(item,index){
			items.push(<NoteTitle time={item.time} text={item.Text} />)
		})

		return <div className="ui-noteShow-div">
			{items}
		</div>
	}
})

module.exports = NoteShow;