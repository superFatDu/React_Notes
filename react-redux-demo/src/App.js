import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInputSubmit, handleInputChanges, handleDeleteItem } from "./store/actionCreators";

class App extends Component {
  render() {
    const { inputValue, handleClick, list, deleteItem, handleInputChange } = this.props;
    return (
      <div>
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={() => {deleteItem(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// connect的第一个参数，用于映射组件和store的对应规则
// 由于这里的state从Provider中来，所以页面中的展示使用的时this.props.attribute
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};

// connect的第二个参数
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = handleInputChanges(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = handleInputSubmit();
      dispatch(action);
    },
    deleteItem(idx) {
      const action = handleDeleteItem(idx);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
