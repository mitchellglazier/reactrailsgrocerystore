import React, { Component } from 'react'
import Item from "./components/item.js";
import ItemForm from "./components/itemForm.js"

class List extends Component {
  state = {
    items: [
      { id: 1, name: 'bananas', price: 1.99, complete: false },
      { id: 2, name: 'jerky', price: 4.32, complete: false },
      { id: 3, name: 'toilet paper', price: 6.99, complete: false }
    ]
  }

  listItems = () => {
    const { items } = this.state;
    return items.map(item => {
      return <Item key={item.id} {...item} itemClick={this.itemClick} />
    });
  }

  itemClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete }
        }
        return item
      })
    })
  }

  addItem = (newItem) => {
    const { items } = this.state;
    const item ={ id: this.getUniqId(), name: newItem, complete: false }
    this.setState({ items: [...items, item] })
  }

  getUniqId = () => {
    return Math.floor((Math.random()) * 10000)
  }

  render() {
    return (
      <div>
        <ItemForm addItem={this.addItem} />
          {this.listItems()}
      </div>
    )
  }
}

export default List;
