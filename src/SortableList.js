import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
 **/
export default class SortableList extends Component {
  constructor(props) {
    super(props)
    let placeholder = document.createElement('li')
    placeholder.className = 'placeholder'
    this.state = { data: this.props.data, placeholder: placeholder }
  }

  /**
   * On drag start, set data.
   **/
  dragStart(e) {
    this.dragged = e.currentTarget
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.currentTarget)
  }

  /**
   * On drag end, update the data state.
   **/
  dragEnd(e) {
    this.dragged.style.display = 'block'
    this.dragged.parentNode.removeChild(this.state.placeholder)
    let data = this.state.data
    let from = Number(this.dragged.dataset.id)
    let to = Number(this.over.dataset.id)
    if (from < to) to--
    if (this.nodePlacement == 'after') to++
    data.splice(to, 0, data.splice(from, 1)[0])
    this.setState({ data: data })
  }

  /**
   * On drag over, update items.
   **/
  dragOver(e) {
    e.preventDefault()
    this.dragged.style.display = 'none'
    if (e.target.className == 'placeholder') return
    this.over = e.target
    let relY = e.clientY - this.over.offsetTop
    let height = this.over.offsetHeight / 2
    let parent = e.target.parentNode
    if (relY > height) {
      this.nodePlacement = 'after'
      parent.insertBefore(this.state.placeholder, e.target.nextElementSibling)
    } else if (relY < height) {
      this.nodePlacement = 'before'
      parent.insertBefore(this.state.placeholder, e.target)
    }
  }

  render() {
    const { data } = this.state
    const listItems = data.map((item, i) => {
      return (
        <li
          data-id={i}
          key={i}
          draggable="true"
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
        >
          {item}
        </li>
      )
    })

    return (
      <SortableWrapper>
        <ul onDragOver={this.dragOver.bind(this)}>{listItems}</ul>
      </SortableWrapper>
    )
  }
}

const SortableWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    background: #eee;
    color: #666;
    margin: 0;
    padding: 10px;
    line-height: 1;
    .placeholder {
      background: #03cc85;
    }
    .placeholder:before {
      content: 'Drop here';
      color: #666;
    }
  }
`
