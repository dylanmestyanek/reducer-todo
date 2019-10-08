import React, { useReducer } from "react"
import { initialState, reducer } from "../reducers/reducer"

const TodoList = ({ state, dispatch }) => {

    const toggleTodo = (task) => {
        dispatch({ type: "TOGGLE_TODO", payload: task.id})
        console.log(state)
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

const todoStyle = {

}