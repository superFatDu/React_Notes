import React, { Component } from "react";
import axios from "axios";
import store from './store';
import TodoListUI from "./TodoListUI";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue} 
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    ) 
  }
  componentDidMount() {
    // React下mock数据需要把数据放在public目录下
    axios.get("/mock/mock.json").then(res => {
      let data = res.data;
      const action = getInitList(data);
      store.dispatch(action);
    }).catch(err => {
      console.log(err);
    })
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    debugger
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
} 

export default TodoList;