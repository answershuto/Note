var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')
var userInformation = require('./userInformation')

var SetupInformation = React.createClass({
	
	getInitialState: function(){
		return {
			informationKey: this.props.informationKey || "",
			informationValue: this.props.informationValue || "",
			isSupoortEdit: this.props.isSupoortEdit || false,
			isImage: this.props.isImage || false
		};
	},

	componentDidMount: function(){
		
	},

	componentWillUnmount: function(){
		
	},

	/*得到截断的字符串，防止长度超出限制换行*/
	getString: function(str, num){
		var bytesCount = 0;
		var strSring = "";
		for (var i = 0; i < str.length; i++)
		{
			var c = str.charAt(i);
			if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
			{
			  	bytesCount += 1;
			}
			else
			{
				bytesCount += 3;
			}

			strSring += str[i];

			if (bytesCount > num) {
				strSring += '..';
			  	return strSring;
			};
		}

		return strSring;
	},

	render: function(){
		var info;
		if (this.state.isImage) {
			info = <img className="img-responsive img-circle ui-setupInformation-image" src={this.state.informationValue}></img>
		}
		else{
			info = <span className="pull-right ui-marginR-20">{this.getString(this.state.informationValue,19)}</span>;
		}

		return <div onClick={this.handleClick} className={this.state.isImage?"ui-setupInformation-image-div":"ui-setupInformation-div"}>
			<div className="col-md-2 col-xs-4">
				<span>{userInformation[this.state.informationKey]}</span>
			</div>
			<div className="col-md-8 col-xs-6">
				{info}
			</div>
			<div className="col-md-2 col-xs-2">
				<div className={this.state.isSupoortEdit ? "glyphicon glyphicon-chevron-right ui-setupInformation-right":"ui-display-none"}></div>
			</div>
		</div>
	},

	handleClick: function(){
		if (!this.state.isSupoortEdit) return;/*不支持编辑*/

		NoteActions.navigation("edit",this.state.informationKey);
	}
})

module.exports = SetupInformation;