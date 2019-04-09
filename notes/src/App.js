import React, { Component, Fragment } from "react";
import Item from "./Item"
import "./app.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputInsert">输入内容</label>
          <input
            id="inputInsert"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          { this.getListItem() }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    // console.log(this);
    // this.setState({
    //   inputValue: e.target.value
    // })
    let val = e.target.value;
    this.setState(() => ({ inputValue: val }));
  }
  handleBtnClick() {
    if(!this.state.inputValue) return;
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }))
  }
  handleItemDelete(index) {
    // console.log(index);
    // imutable this.state里面的数据不允许改变

    let temptList = [...this.state.list];
    temptList.splice(index, 1);
    // this.setState({
    //   list: temptList
    // })
    this.setState(() => ({
      list: temptList
    }))
  }
  getListItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <Item
            content={item}
            index={index}
            handleItemDelete={this.handleItemDelete}
          />
          {/*<li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          >
          </li>*/}
        </div>
      )
    })
  }
}
export default App;