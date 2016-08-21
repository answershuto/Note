var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var NoteTitle = require('./title.react')

var bgClassName = ['bg-success','bg-info','bg-warning','bg-danger'];

var NoteShow = React.createClass({
	
	getInitialState: function(){
		return {
			titles: []
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('titlesShow',this._onShow);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('titlesShow',this._onShow);
	},

	_onShow: function(titles){
		if (titles.result) {
			this.setState({
				titles: titles.params
			})
		}
		else{
			alert('获取数据失败，请重试！');
		}
	},

	render: function(){
		var items = [];
		this.state.titles.forEach(function(item,index){
			items.push(<NoteTitle _id={item._id} date={item.localTime} title={item.title} text={item.text} bgClass={bgClassName[index%bgClassName.length]} />)
		})

		return <div className="ui-noteShow-div">
			{items}
		</div>
	}
})

module.exports = NoteShow;