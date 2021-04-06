import React from 'react'
import TodoListItem from '../todo-list-item/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map(({ label, important, id }) => {
        return (
            <li key={id} className="list-group-item todo-list">
                <TodoListItem
                    label={label}
                    important={important} 
                    onDeleted={() => onDeleted(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>
    )
}

export default TodoList