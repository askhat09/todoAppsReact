import React from 'react'

import './item-add-field.css'

const ItemAddField = ({addItem}) => {
    return (
        <button 
        className="add-field btn btn-secondary"
        onClick={addItem}
        >ADD</button>
    )
}

export default ItemAddField