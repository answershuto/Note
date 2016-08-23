var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var CommonJS = require('../../common');
var update = require('react-addons-update');
var NoteTitle = require('./title.react');

const bgClassName = ['bg-success','bg-info','bg-warning','bg-danger'];

var Search = React.createClass({
	
	getInitialState: function(){
		return {
			condition:"",
			titles: []
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('queryResult',this.onQueryResult);
	},

	componentWillUnmount: function(){
		NoteStores.addListener('queryResult',this.onQueryResult);
	},

	render: function(){
		var items = [];
		this.state.titles.forEach(function(item,index){
			items.push(<NoteTitle _id={item._id} date={item.localTime} title={item.title} text={item.text} bgClass={bgClassName[index%bgClassName.length]} />)
		})

		return <div>
			<form onSubmit={this.handlesubmit} method="post" action="/note">
				<input value={this.state.condition} onChange={this.handleChangeInput} className="form-control input-sm" type="search" placeholder="搜索"></input>
			</form>
			<div>{items}</div>
		</div>
	},

	onQueryResult: function(res){
		if (res.result) {
			this.setState(update(this.state,{titles:{$set: res.params}}));
		}
		else{
			alert('查询失败，请重试！');
		}
	},

	handleChangeInput: function(e){
		this.setState(update(this.state,{condition:{$set: e.target.value}}));
	},

	handlesubmit: function(e){
		CommonJS.stopDefault(e);

		NoteActions.query(this.state.condition);
	}
})

module.exports = Search;