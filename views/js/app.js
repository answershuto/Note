var React = require('react');
var Note = require('./components/Note.react.js');
var Login = require('./components/Login.react.js');

React.render(
	<Login />,
	document.getElementById('userLogin')
)

/*
React.render(
  <Note />,
  document.getElementById('noteApp')
);*/
