import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'

function App() {
  // 1. state
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  // 2. effects
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // 3. values calculated from state
  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.done
    if (filter === 'done') return t.done
    return true
  })
  const remaining = tasks.filter((t) => !t.done).length

  // 4. functions that change state
  function addTask(text) {
    const newTask = { id: crypto.randomUUID(), text, done: false }
    setTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  // 5. what to show on screen
  return (
    <div className="app">
      <Header title="Task Tracker" subtitle="Get things done" />
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <p className="count">{remaining} task{remaining === 1 ? '' : 's'} left</p>
    </div>
  )
}

export default App
