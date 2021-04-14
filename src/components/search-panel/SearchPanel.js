import React, {useState} from 'react'
import './SearchPanel'

const SearchPanel = ({searchChange}) => {
    const [term, setTerm] = useState('')
    const onSearchChange = (e) => {
        const term = e.target.value
        setTerm(term)
        searchChange(term)
    }
    return (
        <input
            className="form-control search-input"
            placeholder="search"
            value={term}
            onChange={onSearchChange}
        />
    )
}

export default SearchPanel