import React, {useState} from 'react'

import './item-add-field.css'

const ItemAddField = ({ addItem }) => {
    const [todo, setTodo] = useState("")

    const onLabelChange = (e) => {
        setTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addItem(todo)
        setTodo("")
    }

    return (
        <form 
            className="item-add-form d-flex"
            onSubmit={onSubmit}>
            <input 
                className="form-control"
                type="text"
                placeholder="What's to be done?" 
                onChange={onLabelChange}
                value={todo} />
            <button
                className="add-field btn btn-outline-secondary"
            >ADD</button>
        </form>
    )
}

export default ItemAddField