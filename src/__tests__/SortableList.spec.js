/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import SortableList from '../SortableList'

test('SortableList renders correctly and matches snapshot', () => {
  let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']

  const component = renderer.create(
    <SortableList data={colors} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SortableList renders the correct elements and props', () => {
  let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']

  const wrapper = shallow(
    <SortableList data={colors} />
  )

  expect(wrapper.instance().props.data).toEqual(colors)

  expect(wrapper.find('ul').length).toEqual(1)
  expect(wrapper.find('li').length).toEqual(colors.length)
  expect(wrapper.find('li').first().prop('draggable')).toEqual('true');
  expect(wrapper.find('li').first().prop('data-id')).toEqual(0);
})
