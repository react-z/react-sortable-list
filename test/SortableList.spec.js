import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import SortableList from '../src/SortableList'

test('SortableList component', (t) => {
  let colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

  const wrapper = mount( <SortableList data={colors} /> )
  t.pass(
    expect(wrapper.props().data).toEqual(colors)
  )

  t.end()
});
