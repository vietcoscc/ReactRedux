import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => {
    console.log(state);
    console.log(state.todo.length);
    return state.todo.length
  });
  console.log("Selector change: " + selector);
  return (
    <div className="App">
      <h1>{selector}</h1>
      <button onClick={() => {
        console.log("onClick")
        dispatch({type: "ADD_TODO", data: "Todo"});
      }}>Click
      </button>
    </div>
  );
}

export default App;
