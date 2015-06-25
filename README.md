# react-sortable-list 

react-sortable-list is a sortable list component using react.js and html5 drag and drop api.

![](example/screenshot.png)

## Installation

`npm install react-sortable-list --save`

## Usage

```javascript
var React = require('react');
var SortableList = require('react-sortable-list');

var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

React.renderComponent(<SortableList data={colors} />, document.getElementById("container"));

```

## Styles

react-sortable-list can be used with your own custom styles. A minimal sortable-list.css style sheet is included as a guide.

## Development

Initial set up, run:
    
    npm install

## License

[MIT](http://isekivacenz.mit-license.org/)
