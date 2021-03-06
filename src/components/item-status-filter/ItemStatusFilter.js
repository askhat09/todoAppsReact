import React from 'react'

import './ItemStatusFilter.css'

const ItemStatusFilter = ({ filter, onFilterChange }) => {

    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    const button = buttons.map(({ name, label }) => {
        const isActive = filter === name
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
        return <button
            key={name}
            type="button"
            className={`btn ${clazz}`}
            onClick={() => onFilterChange(name)}>
            {label}
        </button>
    })

    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default ItemStatusFilter