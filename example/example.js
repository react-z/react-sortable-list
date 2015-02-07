var React = require('react');
var SortableList = require('../jsx/sortable-list.jsx');
var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

React.render(
	React.createElement(
		SortableList, 
		{data: colors}
	),
	document.getElementById("container")
);

