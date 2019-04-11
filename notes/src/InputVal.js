import React, { Component } from "react"

class InputVal extends Component {
  constructor(props) {
    super(props);
    console.log("inputBase init");
  }
  render() {
    return (
      <span>{this.props.value}</span>
    )
  }
}

export default InputVal;