"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
**/

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

var SortableList = _react2["default"].createClass({
  displayName: "SortableList",

  getInitialState: function getInitialState() {
    return { data: this.props.data };
  },
  /** 
   * On drag start, set data.
  **/
  dragStart: function dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  /** 
   * On drag end, update the data state.
  **/
  dragEnd: function dragEnd(e) {
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({ data: data });
  },
  /** 
   * On drag over, update items.
  **/
  dragOver: function dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if (e.target.className == "placeholder") return;
    this.over = e.target;
    var relY = e.clientY - this.over.offsetTop;
    var height = this.over.offsetHeight / 2;
    var parent = e.target.parentNode;

    if (relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    } else if (relY < height) {
      this.nodePlacement = "before";
      parent.insertBefore(placeholder, e.target);
    }
  },
  render: function render() {
    var listItems = this.state.data.map((function (item, i) {
      return _react2["default"].createElement(
        "li",
        { className: "react-sortable", "data-id": i,
          key: i,
          draggable: "true",
          onDragEnd: this.dragEnd,
          onDragStart: this.dragStart },
        item
      );
    }).bind(this));

    return _react2["default"].createElement(
      "ul",
      { onDragOver: this.dragOver },
      listItems
    );
  }
});

module.exports = SortableList;