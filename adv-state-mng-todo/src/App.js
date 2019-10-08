import React, { useReducer } from 'react';
import './App.css';
import { reducer } from "./reducers/reducer"
import { initialState } from "./reducers/reducer"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {
        // dispatch({ type: 'ADD_TODO'})
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: { item: 'test', completed: false, id: 3255436 }})}></button>
      }
    </div>
  );
}

export default App;
