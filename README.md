# react-sortable-list

react-sortable-list is a sortable list component using react and html5 drag and drop api.

## Installation

`npm install react-sortable-list --save`

## Usage

```javascript
import SortableList from 'react-sortable-list'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  render () {
    let colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

    return (
      <div>
        <SortableList data={colors} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-sortable-list can be used with your own custom styles. A minimal [list.css](https://github.com/StevenIseki/react-sortable-list/blob/master/example/public/list.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
