var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var User = React.createClass({
	
	getInitialState: function(){
		return {
			userName: 'answer',
			nikeNmae: "曹阳",
			time: ""
		};
	},

	componentDidMount: function(){
		this.timmer = setInterval(function(){
			var dateObj = new Date();
			this.setState(update(this.state,{time:{$set: (dateObj.getFullYear()+'/'+dateObj.getMonth()+'/'+dateObj.getDate()+' '+('00'.slice(0,0-dateObj.getHours().toString().length)+dateObj.getHours().toString())+':'+('00'.slice(0,0-(dateObj.getMinutes().toString().length))+dateObj.getMinutes())+':'+'00'.slice(0,0-dateObj.getSeconds().toString().length)+dateObj.getSeconds())}}));
		}.bind(this),500);
	},

	componentWillUnmount: function(){
		clearInterval(this.timmer);
	},

	render: function(){
		return <div className="container-fluid ui-user-body">
			
			<div className="row">
				<div className="col-md-10 col-xs-10">
					<div className="pull-left">
						<img className="img-circle ui-user-head" src="../../image/defaultHeadPortrait.png"></img>
					</div>
					<div className="pull-left ui-marginL-15">
						<div className="ui-marginT-10">
							{this.state.nikeNmae+' ('+this.state.userName+')'}
						</div>
						<div className="ui-marginT-10">{this.state.time}</div>
					</div>
				</div>
				<div className="col-md-2 col-xs-2">
					<div className="glyphicon glyphicon-cog ui-home-setup"></div>
				</div>
			</div>
		</div>
	}
})

module.exports = User;