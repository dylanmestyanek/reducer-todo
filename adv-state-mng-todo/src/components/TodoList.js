import React from "react"

const TodoList = ({ state, dispatch }) => {

    const toggleTodo = (task) => {
        dispatch({ type: "TOGGLE_TODO", payload: task.id})
    }

    return (
        <div>
            {
                state.map(task => <p 
                        style={{textDecoration: task.completed ? "line-through" : "none" }} 
                        onClick={() => toggleTodo(task)}>
                        {task.item}
                    </p>)
            }
        </div>
    );
}

export default TodoList
