import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const todoCount = useSelector(state => {
    return state.todo.length
  });
  return (
    <div className="App">
      <h1>{todoCount}</h1>
      <button onClick={() => {
        console.log("onClick")
        dispatch({type: "ADD_TODO", data: "Todo"});
      }}>Click
      </button>
    </div>
  );
}

export default App;
