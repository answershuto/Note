var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');

var Login = React.createClass({
	
	getInitialState: function(){
		return {
			
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className="ui-form-login" style={{marginTop: $(window).height() / 5}}>
			<div className="ui-login-img">
				<img className="img-circle" src="../../image/defaultHeadPortrait.png">
			</img></div>
			<h2>欢迎使用</h2>
			<input type="text" className="form-control" placeholder="用户名" autofocus></input>
			<input type="text" className="form-control" placeholder="密码"></input>
			<div>
				<span>没有账号？</span>
				<a href="html/register.html">立即注册</a>
				<a className="ui-float-right">忘记密码</a>
			</div>
			<botton className="btn btn-lg btn-warning btn-block">登陆</botton>
		</div>
	}
})

module.exports = Login;