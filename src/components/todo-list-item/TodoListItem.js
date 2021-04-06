import React, { useState } from 'react'
import './TodoListItem.css'

const TodoListItem = ({ label, onDeleted }) => {

  const [doneTodoListItem, setDoneTodoListItem] = useState(false)
  const [markLabel, setMarkLabel] = useState(false)
  
  let todoListItemLabel = "todo-list-item"

  const onLabelClick = () => {
    setDoneTodoListItem(doneTodoListItem => { return !doneTodoListItem })
  }

  const onMarkLabel = () => {
    setMarkLabel(markLabel => { return !markLabel })
  }

  if (doneTodoListItem) {
    todoListItemLabel += " done"
  }

  if (markLabel) {
    todoListItemLabel += " important"
  }

  return (
    <span className={todoListItemLabel}>
      <span
        className="todo-list-item-label"
        onClick={onLabelClick}
      >
        {label}
      </span>
      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onMarkLabel}
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