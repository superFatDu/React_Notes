import React, { Component } from 'react'
import PropTypes from "prop-types"

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let { content, test } = this.props;
    return (
      <li
        onClick={this.handleClick}
      >
        { test }-{ content }
      </li>
    )
  }
  handleClick() {
    // console.log(this.props.index);
    // this.props.handleItemDelete(this.props.index)
    let { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}
Item.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
}
Item.defaultProps = {
  test: "hello world"
}
export default Item;