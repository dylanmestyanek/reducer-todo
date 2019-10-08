import React from "react"

const TodoForm = ({ 
    handleChange, 
    handleSubmit, 
    todo, 
    dispatch 
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='todo'
                value={todo}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Add Todo</button>
            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
        </form>
    );
}

export default TodoForm