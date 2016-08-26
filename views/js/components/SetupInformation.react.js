var React = require('react');
var NoteActions = require('../actions/NoteActions')
var NoteStores = require('../stores/NoteStores')

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

	render: function(){
		var info;
		if (this.state.isImage) {
			info = <img className="img-responsive img-circle ui-setupInformation-image" src={this.state.informationValue}></img>
		}
		else{
			info = <span className="pull-right ui-marginR-20">{this.state.informationValue}</span>;
		}

		return <div className={this.state.isImage?"ui-setupInformation-image-div":"ui-setupInformation-div"}>
			<div className="col-md-2 col-xs-3">
				<span>{this.state.informationKey}</span>
			</div>
			<div className="col-md-8 col-xs-7">
				{info}
			</div>
			<div className="col-md-2 col-xs-2">
				<div className={this.state.isSupoortEdit ? "glyphicon glyphicon-chevron-right ui-setupInformation-right":"ui-display-none"}></div>
			</div>
		</div>
	}
})

module.exports = SetupInformation;