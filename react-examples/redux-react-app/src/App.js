import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';

function App() {

  const count = useSelector(state=>state.count);

  const dispatch = useDispatch();

  return (
   
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
