import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST } from './actionTypes';
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getInitList = data => ({
  type: GET_INIT_LIST,
  data
});

export const getDefaultList = () => {
  return (dispatch) => {
    // React下mock数据需要把数据放在public目录下
    axios.get("/mock/mock.json").then(res => {
      let data = res.data;
      const action = getInitList(data);
      dispatch(action);
    })
  }
};