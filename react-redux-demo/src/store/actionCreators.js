import { INPUT_CHANGE, INPUT_SUBMIT, DELETE_ITEM } from "./actionTypes";

export const handleInputChanges = (value) => {
  return ({
    type: INPUT_CHANGE,
    value
  })
};

export const handleInputSubmit = () => ({
  type: INPUT_SUBMIT
});

export const handleDeleteItem = (index) => ({
  type: DELETE_ITEM,
  index
});