var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStores = require('../stores/NoteStores');
var update = require('react-addons-update');

var Edit = React.createClass({
	
	getInitialState: function(){
		return {
			editType: this.props.editType
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		console.log(this.state.editType)
		var show = "";
		switch(this.state.editType){
			case 'userImage':/*头像*/
				show = <div>
					<form action="/note/uploadIcon" method="post" target="userImage">
						<input type="file" accept="image/*" name="image"></input>
						<input type="submit" value="上传头像"></input>
					</form>
					<iframe name="userImage"></iframe>
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
	}
})

module.exports = Edit;