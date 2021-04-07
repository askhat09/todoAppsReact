import React from 'react'
import TodoListItem from '../todo-list-item/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos, onDeleted, onMarkImportant, onMarkDone }) => {

    const elements = todos.map(({ label, important, id, done }) => {
        return (
            <li key={id} className="list-group-item todo-list">
                <TodoListItem
                    label={label}
                    important={important}
                    done={done}
                    onDeleted={() => onDeleted(id)}
                    onMarkImportant={() => onMarkImportant(id)}
                    onMarkDone={() => onMarkDone(id)} />
            </li>
        )
    })

    return (
        <ul className="list-group">
            { elements}
        </ul>
    )
}

export default TodoList