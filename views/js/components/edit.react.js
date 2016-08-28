var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Edit = React.createClass({
	
	getInitialState: function(){
		return {
			editType: this.props.editType,
			imageSrc: this.props.imageSrc || "../../image/defaultHeadPortrait.png"
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		var show = "";console.log(this.state.uploadFile)
		switch(this.state.editType){
			case 'userImage':/*头像*/
				show = <div className="">
					<div className="ui-edit-icon-div">
						<img onClick={this.handleIconClick} className="ui-edit-icon img-circle" src={this.state.imageSrc}></img>
					</div>
					<div className="ui-edit-notes-div">
						<span>注：头像大小不得超过2M</span>
					</div>
					<form className="ui-display-none" action="/note/uploadIcon" method="post" encType="multipart/form-data" target="userImage">
						<input id="edit_file" onChange={this.handleFileChange} type="file" accept="image/*" name="image"></input>
						<input id="edit_upload" type="submit" value="上传头像"></input>
					</form>
					<iframe name="userImage" className="ui-display-none"></iframe>
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
	}


})

module.exports = Edit;