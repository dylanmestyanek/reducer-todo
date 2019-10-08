import React from "react"
import { initialState } from "../reducers/reducer"

const TodoList = () => {
    return (
        initialState.map(todo => 
            <p> {todo.item} </p>
        )
    );
}

export default TodoList