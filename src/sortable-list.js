import React from 'react'

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
**/

let placeholder = document.createElement("li");
placeholder.className = "placeholder";

let SortableList = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  /** 
   * On drag start, set data.
  **/
  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  /** 
   * On drag end, update the data state.
  **/
  dragEnd: function(e) {
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    let data = this.state.data;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  /** 
   * On drag over, update items.
  **/
  dragOver: function(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    let relY = e.clientY - this.over.offsetTop;
    let height = this.over.offsetHeight / 2;
    let parent = e.target.parentNode;
    
    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  },
  render: function() {
    var listItems = this.state.data.map((function(item, i) {
      return (

          <li className="react-sortable" data-id={i}
              key={i}
              draggable="true"
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}>
            {item}
          </li>
      );
    }).bind(this));

    return <ul onDragOver={this.dragOver}>{listItems}</ul>
  }
});

module.exports = SortableList;