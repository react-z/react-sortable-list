"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _SortableList = _interopRequireDefault(require("../SortableList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('SortableList renders correctly and matches snapshot', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_SortableList.default, {
    data: colors
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('SortableList renders the correct elements and props', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SortableList.default, {
    data: colors
  }));
  expect(wrapper.instance().props.data).toEqual(colors);
  expect(wrapper.find('ul').length).toEqual(1);
  expect(wrapper.find('li').length).toEqual(colors.length);
  expect(wrapper.find('li').first().prop('draggable')).toEqual('true');
  expect(wrapper.find('li').first().prop('data-id')).toEqual(0);
});