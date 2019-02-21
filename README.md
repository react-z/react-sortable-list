# react-sortable-list

react-sortable-list is a sortable list component using react and html5 drag and drop api.

## Installation

`yarn add react-sortable-list`

## Use

```jsx
import SortableList from 'react-sortable-list'
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
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
