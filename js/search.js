/** @jsx React.DOM */

var React = require('react');
var SearchItemInArray = require('../js/SearchItemInArray.js');

/**
 * Search module
 * A simple search box component.
**/

var Search = React.createClass({displayName: "Search",
  getInitialState: function(){
     return {
       items:  ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'],
       matchingItems: []
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  changeInput: function () {
    var searchValue = this.refs.searchInput.getDOMNode().value;
    var result = SearchItemInArray(this.state.items, searchValue);
    this.setState({matchingItems: result});
  },
  autoComplete: function (input) {
  },  
  render: function(){

    var items = this.state.matchingItems.map(function (item) {
      return (
          React.createElement("li", null, 
          React.createElement("a", null, item)
         )
      );
    });


    return (
      React.createElement("div", {className: "react-search"}, 
       React.createElement("input", {type: "text", className: "input-text", ref: "searchInput", onKeyUp: this.changeInput}), 

        React.createElement("div", {id: "result"}, 

        React.createElement("div", {className: "pure-menu pure-menu-open"}, 
          React.createElement("ul", null, 
          items
          )
        )

        )
      )
    );
  }
});

module.exports = Search;