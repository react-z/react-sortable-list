import SortableList from '../lib/SortableList' // 'react-sortable-list'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']

    return (
      <div>
        <SortableList data={colors} />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
