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

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        onDeleted={deleteItem}
        onMarkImportant={markImportant}
        onMarkDone={markDone} />
      <ItemAddField addItem={addItem} />
    </div>
  )
}

export default App