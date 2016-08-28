var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Edit = React.createClass({
	
	getInitialState: function(){
		return {
			editType: this.props.editType,
			userInformation: this.props.userInformation
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		var show = "";
		switch(this.state.editType){
			case 'userImage':/*头像*/
				show = <div className="">
					<div className="ui-edit-icon-div">
						<img onClick={this.handleIconClick} className="img-responsive ui-edit-icon img-circle" src={this.state.userInformation.userImage+'?'+Math.random() || "../../image/defaultHeadPortrait.png"}></img>
					</div>
					<div className="ui-edit-notes-div">
						<span>注：头像大小不得超过2M</span>
					</div>
					<div className="ui-edit-notes-div">
						<span>支持</span>
						<span className="ui-color-red">*jpg、jpeg、png</span>
						<span>格式的图片上传</span>
					</div>
					<form className="ui-display-none" action="/note/uploadIcon" method="post" encType="multipart/form-data" target="userImage">
						<input id="edit_file" onChange={this.handleFileChange} type="file" accept="image/*" name="image"></input>
						<input id="edit_upload" type="submit" value="上传头像"></input>
					</form>
					<iframe id="edit_iframe" name="userImage" className="ui-display-none"></iframe>
				</div>
				break;
			case 'nikeName':/*用户名*/
				break;
			default:
				break;
		}

		return <div className="">
			{show}
		</div>
	},

	handleIconClick: function(e){
		$('#edit_file').click();
	},  

	handleFileChange: function(e){
		$('#edit_upload').click();

		var timmer = setInterval(function(){
			var text = window.frames["userImage"].document.body.innerHTML;
			if (text) {
				switch(text){
					case 'uploadIcon successed':
						NoteActions.updateUserInformation();
						break;
					case 'uploadIcon userImage err':
						alert('图像保存失败，请重试');
						break;
					case 'uploadIcon img type err':
						alert('上传头像格式有误，请重新上传');
						break;
					default:
						alert('未知错误');
				}
				clearInterval(timmer);
			};
		},200);
	}


})

module.exports = Edit;