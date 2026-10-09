import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()          // stop the page from reloading
    const trimmed = text.trim()
    if (!trimmed) return        // ignore empty input
    onAdd(trimmed)              // tell the parent
    setText('')                 // clear the box
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm
