import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ label, onDeleted, onMarkImportant, important, done }) => {

  let todoListItemLabel = "todo-list-item"

  if (done) {
    todoListItemLabel += " done"
  }

  if (important) {
    todoListItemLabel += " important"
  }

  return (
    <span className={todoListItemLabel}>
      <span
        className="todo-list-item-label"
      // onClick={onLabelClick}
      >
        {label}
      </span>
      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onMarkImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default TodoListItem