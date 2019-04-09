import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let { content } = this.props;
    return (
      <div
        onClick={this.handleClick}
      >
        { content }
      </div>
    )
  }
  handleClick() {
    // console.log(this.props.index);
    // this.props.handleItemDelete(this.props.index)
    let { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}

export default Item;