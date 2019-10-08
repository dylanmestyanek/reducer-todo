import React, { useReducer, useState } from 'react';
import './App.css';
import { initialState, reducer  } from "./reducers/reducer"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // Runs dispatch action, adding todo object to initialState of todo isn't empty
  const handleSubmit = (e) => {
    e.preventDefault();
    todo !== '' && dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('');
  }

  return (
    <div className="App">
      <TodoForm 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        todo={todo}
      />
      <TodoList 
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
