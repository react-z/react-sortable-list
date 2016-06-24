'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
**/

var SortableList = function (_Component) {
  _inherits(SortableList, _Component);

  function SortableList(props) {
    _classCallCheck(this, SortableList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SortableList).call(this, props));

    var placeholder = document.createElement("li");
    placeholder.className = "placeholder";
    _this.state = { data: _this.props.data, placeholder: placeholder };
    return _this;
  }

  /**
   * On drag start, set data.
  **/


  _createClass(SortableList, [{
    key: 'dragStart',
    value: function dragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData("text/html", e.currentTarget);
    }

    /**
     * On drag end, update the data state.
    **/

  }, {
    key: 'dragEnd',
    value: function dragEnd(e) {
      this.dragged.style.display = "block";
      this.dragged.parentNode.removeChild(this.state.placeholder);
      var data = this.state.data;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if (from < to) to--;
      if (this.nodePlacement == "after") to++;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({ data: data });
    }

    /**
     * On drag over, update items.
    **/

  }, {
    key: 'dragOver',
    value: function dragOver(e) {
      e.preventDefault();
      this.dragged.style.display = "none";
      if (e.target.className == "placeholder") return;
      this.over = e.target;
      var relY = e.clientY - this.over.offsetTop;
      var height = this.over.offsetHeight / 2;
      var parent = e.target.parentNode;
      if (relY > height) {
        this.nodePlacement = "after";
        parent.insertBefore(this.state.placeholder, e.target.nextElementSibling);
      } else if (relY < height) {
        this.nodePlacement = "before";
        parent.insertBefore(this.state.placeholder, e.target);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.state.data;

      var listItems = data.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          { className: 'react-sortable', 'data-id': i, key: i,
            draggable: 'true',
            onDragEnd: _this2.dragEnd.bind(_this2),
            onDragStart: _this2.dragStart.bind(_this2) },
          item
        );
      });

      return _react2.default.createElement(
        'ul',
        { onDragOver: this.dragOver.bind(this) },
        listItems
      );
    }
  }]);

  return SortableList;
}(_react.Component);

exports.default = SortableList;