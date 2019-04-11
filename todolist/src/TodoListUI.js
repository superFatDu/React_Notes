import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
class TodoListUI extends Component {
  render() {
    return (
      <div style={{marginLeft: 10, marginTop: 10}}>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder="hello world"
            style={{width: 300, marginRight: 10}} 
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoListUI;