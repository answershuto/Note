var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');
var CommonJS = require('../../common');
var update = require('react-addons-update');

var Search = React.createClass({
	
	getInitialState: function(){
		return {
			condition:""
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('queryResult',this.onQueryResult);
	},

	componentWillUnmount: function(){
		NoteStores.addListener('queryResult',this.onQueryResult);
	},

	render: function(){
		return <div>
			<form onSubmit={this.handlesubmit} method="post" action="/note">
				<input value={this.state.condition} onChange={this.handleChangeInput} className="form-control input-sm" type="search" placeholder="搜索"></input>
			</form>
			<div></div>
		</div>
	},

	onQueryResult: function(params){
		console.log('params',params)
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