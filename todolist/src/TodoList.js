import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
  render() {
    return (
      <div style={{marginLeft: 10, marginTop: 10}}>
        <div>
          <Input placeholder="hello world" style={{width: 300, marginRight: 10}} />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;