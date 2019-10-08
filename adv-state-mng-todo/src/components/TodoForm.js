import React from "react"

const TodoForm = ({ handleChange, handleSubmit, todo }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name='todo'
            value={todo}
            onChange={(e) => handleChange(e)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm