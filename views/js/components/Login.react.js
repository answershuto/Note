var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Login = React.createClass({
	
	getInitialState: function(){
		return {
			UserName: "",
			Password: "",
			divClassName: "ui-form-login"
		};
	},

	componentDidMount: function(){
		NoteStores.addListener('login',this.onLogin);
	},

	componentWillUnmount: function(){
		NoteStores.delListener('login',this.onLogin);
	},

	render: function(){
		return <div className={this.state.divClassName} style={{marginTop: $(window).height() / 5}}>
			<div className="ui-login-img">
				<img className="img-circle" src="../../image/defaultHeadPortrait.png">
			</img></div>
			<h2 className="ui-center">欢迎使用</h2>
			<input type="text" className="form-control" value={this.state.userName} onChange={this.handleUserNameChange} placeholder="用户名" autofocus></input>
			<input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} placeholder="密码"></input>
			<div>
				<span>没有账号？</span>
				<a href="html/register.html">立即注册</a>
				<a className="ui-float-right" href="html/forgetPassword.html">忘记密码</a>
			</div>
			<botton className="btn btn-lg btn-warning btn-block" onClick={this.handleLoginClick}>登陆</botton>
		</div>
	},

	onLogin: function(isSuccess){
		if (isSuccess) {
			this.setState(update(this.state,{divClassName:{$set: 'ui-display-none'}}));
		}
		else{
			alert('用户名或者密码错误');
		}
	},

	handleUserNameChange: function(e){
		this.setState(update(this.state,{UserName:{$set: e.target.value}}));
	},

	handlePasswordChange: function(e){
		this.setState(update(this.state,{Password:{$set: e.target.value}}));
	},

	handleLoginClick: function(){
		NoteActions.login(this.state);
	}
})

module.exports = Login;