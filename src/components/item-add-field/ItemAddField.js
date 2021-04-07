import React from 'react'

import './item-add-field.css'

const ItemAddField = ({addItem}) => {
    return (
        <button 
        className="add-field btn btn-outline-secondary"
        onClick={() => addItem("hello")}
        >ADD</button>
    )
}

export default ItemAddField