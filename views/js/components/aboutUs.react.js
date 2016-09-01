var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var AboutUs = React.createClass({
	
	getInitialState: function(){
		return {

		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div>
			<div>
				<img className="img-responsive img-circle ui-about-image" src="../../image/haimianbaobao.png"></img>
			</div>
			<div className="ui-about-name">
				<span>染陌云笔记 1.3.2</span>
			</div>
			<div>
				<div className="col-md-1 col-xs-1"></div>
				<div className="col-md-10 col-xs-10 ui-about-center">
					<div>作者： 曹阳</div>
					<div>备注： 本软件只供学习使用，不做任何商业用途。</div>
					<div>
						Github:<a href="https://github.com/answershuto">https://github.com/answershuto</a>
					</div>
					<div>
						邮箱：<a href="answershuto@126.com">answershuto@126.com</a>
					</div>
				</div>
				<div className="col-md-1 col-xs-1"></div>
			</div>
			<div className="fixed">©2016 CaoYang , All rights reserved.</div>
		</div>
	}
})

module.exports = AboutUs;