import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import SortableList from '../src/SortableList'

test('SortableList component', (t) => {
  setupJsdom()
  let colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

  const wrapper = mount( <SortableList data={colors} /> )
  t.pass(
    expect(wrapper.props().data).toEqual(colors)
  )

  t.end()
});
