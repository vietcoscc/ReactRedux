import {combineReducers} from "redux";

const data = [];
const todoReducer = (state = [], action) => {
  if (!action.data) {
    return state
  }
  data.push(action.data);
  return data
};

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer
