var React = require('react');
var NoteActions = require('../actions/NoteActions');
var update = require('react-addons-update');

const COMMON = 0;/*普通*/
const MODIFY = 1;/*编辑状态*/

const MODIFY_CLASS = ["glyphicon-pencil","glyphicon-ok"];
const SPAN_CLASS = ["ui-display-inline","ui-display-none"];
const INPUT_CLASS = ["ui-display-none","ui-display-inline"];

var NoteShow = React.createClass({
	
	getInitialState: function(){
		return {
			modifyStatus: COMMON,
			title: this.props.title || "",
			date: this.props.date || "",
			text: this.props.text || ""
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	render: function(){
		return <div className={this.props.bgClass}>
			<div className="ui-width-900 ui-float-left">
				<div>
					<span>时间：</span>
					<span>{this.props.date}</span>
				</div>
				<div>
					<span>标题：</span>
					<span className={SPAN_CLASS[this.state.modifyStatus]}>{this.state.title}</span>
					<input className={INPUT_CLASS[this.state.modifyStatus]} type="text" value={this.state.title}></input>
				</div>
				<div>
					<span>内容：</span>
					<span className={SPAN_CLASS[this.state.modifyStatus]}>{this.state.text}</span>
					<input className={INPUT_CLASS[this.state.modifyStatus]} type="text" value={this.state.text}></input>
				</div>
			</div>
			<div className="ui-float-right">
				<div className="ui-del-div glyphicon glyphicon-trash" onClick={this.handleDelClick.bind(this)}></div>
				<div className={MODIFY_CLASS[this.state.modifyStatus]+" glyphicon ui-modify-div"} onClick={this.handleModifyClick}></div>
			</div>
			<div className="ui-clear-both"></div>
		</div>
	},

	handleDelClick: function(){
		NoteActions.delete(this.state.date);
	},

	handleModifyClick: function(){
		if (this.state.modifyStatus === COMMON) {/*修改*/
			this.setState(update(this.state,{modifyStatus:{$set: MODIFY}}));
		}
		else{/*保存*/
			this.setState(update(this.state,{modifyStatus:{$set: COMMON}}));
			NoteActions.modify();
		}
	}
})

module.exports = NoteShow;