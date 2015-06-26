import React from 'react'
import SortableList from '../lib/sortable-list'

var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];
React.render(<SortableList data={colors} />, document.getElementById("container"));