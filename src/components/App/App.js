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
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  )

  const deleteItem = (id) => {
    const idx = todoData.findIndex(el => el.id === id)
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArray)
  }

  const addItem = (text) => {
    const newItem = {
      label: "Hello World",
      important: false,
      id: Math.random()*100
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
      <TodoList todos={todoData} onDeleted={deleteItem} />
      <ItemAddField addItem={addItem}/>
    </div>
  )
}

export default App