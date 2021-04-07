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
      { label: "Drink Coffee", important: false, done: false, id: 1 },
      { label: "Make Awesome App", important: false, done: false, id: 2 },
      { label: "Have a lunch", important: false, done: false, id: 3 }
    ]
  )

  const deleteItem = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const markImportant = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const oldItem = todoData[idx]
    const newItem = {...oldItem, important: !oldItem.important}
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

    setTodoData(newArray)
  }

  const addItem = (text) => {
    const newItem = {
      label: "Hello World",
      important: false,
      done: false,
      id: Math.random() * 100
    }

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
        onMarkImportant={markImportant} />
      <ItemAddField addItem={addItem} />
    </div>
  )
}

export default App