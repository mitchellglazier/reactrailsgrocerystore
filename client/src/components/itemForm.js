import React from 'react';
import './App.css';

class ItemForm extends React.Component {
  state = { newItem: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    // this.setState({ word e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state)
    this.setState({name: '', price: ''})

  }

  render() {
    const {newItem} = this.state
    const {newPrice} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          label='Item'
          name='newItem'
          value={this.state.name}
          required
          placeholder='Add Item'
          onChange={this.handleChange.name}
        />
        <input
          label='Price'
          name='newPrice'
          value={this.state.price}
          required
          placeholder='Add Price'
          onChange={this.handleChange.price}
      />
      </form>
    )
  }
}

export default ItemForm;
