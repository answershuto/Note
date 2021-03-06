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
			case 'nikeName':/*昵称*/
				show = <div>
					<input className="form-control input-sm" maxLength='10' placeholder="昵称" type="text" value={this.state.userInformation[this.state.editType]} onChange={this.handleInputChange} onBlur={this.handleInputBlur}></input>
				</div>
				break;
			case 'place':/*所在区域*/
				show = <div>
					<input className="form-control input-sm" maxLength='20' placeholder="所在区域" type="text" value={this.state.userInformation[this.state.editType]} onChange={this.handleInputChange} onBlur={this.handleInputBlur}></input>
				</div>
				break;
			case 'personalizedSignature':
				show = <div>
					<input className="form-control input-sm" maxLength='20' placeholder="个性签名" type="text" value={this.state.userInformation[this.state.editType]} onChange={this.handleInputChange} onBlur={this.handleInputBlur}></input>
				</div>
				break;
			case 'age':
				var ages = [];
				for(var i=0;i<100;i++){
					ages.push(<option>{i}</option>)
				}
				show = <div>
					<select className="ui-edit-select" value={this.state.userInformation[this.state.editType]} onChange={this.handleInputChange} onBlur={this.handleInputBlur}>
						{ages}
					</select>
				</div>
				break;
			case 'Gender':
				show = <div>
					<select value={this.state.userInformation[this.state.editType]} onChange={this.handleInputChange} onBlur={this.handleInputBlur}>
						<option>男</option>
						<option>女</option>
					</select>
				</div>
				break;
			default:
				break;
		}

		return <div>
			{show}
		</div>
	},

	handleInputChange: function(e){
		var infor = this.state.userInformation;
		infor[this.state.editType] = e.target.value;
		this.setState(update(this.state,{userInformation:{$set: infor}}));
	},

	handleInputBlur: function(e){
		NoteActions.modifyUserInformation(this.state.userInformation);
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