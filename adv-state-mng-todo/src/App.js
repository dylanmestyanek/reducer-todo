import React, { useReducer, useState } from 'react';
import './App.css';
import { reducer } from "./reducers/reducer"
import { initialState } from "./reducers/reducer"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    todo !== '' && dispatch({ 
      type: 'ADD_TODO', 
      payload: { 
        item: todo, 
        completed: false, 
        id: Date.now() 
      }
    })
    setTodo('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name='todo'
          value={todo}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit"></button>
      </form>
  );
}

export default App;
