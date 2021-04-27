import {combineReducers} from "redux";

const data = [];
const todoReducer = (state = [], action) => {
  // console.log(state);
  // console.log(action);
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
