import React, { useState } from 'react'
import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/TodoList'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'
import ItemAddField from '../item-add-field/ItemAddField'

import './App.css'

const App = () => {

  const [todoData, setTodoData] = useState(
    [
      createItem('Drink Coffee'),
      createItem('Make Awesome App'),
      createItem('Have a lunch'),
    ]
  )
  const [term, setTerm] = useState('')

  const deleteItem = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const toggleProperty = (arr, id, propname) => {
    const idx = arr.findIndex(el => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propname]: !oldItem[propname] }
    const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]

    setTodoData(newArray)
  }

  function createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: Math.random() * 100
    }
  }

  const markImportant = (id) => {
    toggleProperty(todoData, id, 'important')
  }

  const markDone = (id) => {
    toggleProperty(todoData, id, 'done')
  }

  const addItem = (text) => {
    const newItem = createItem(text)

    const newData = [...todoData, newItem]

    setTodoData(newData)
  }

  const search = (items, term) => {
    if(term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  const visibleItems = search(todoData, term)

  const onSearchChange = (term) => {
    setTerm(term)
  }

  const doneCount = todoData.filter(el => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <div className="todo-app">
      <AppHeader todo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel searchChange={onSearchChange}/>
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onMarkImportant={markImportant}
        onMarkDone={markDone} />
      <ItemAddField addItem={addItem} />
    </div>
  )
}

export default App