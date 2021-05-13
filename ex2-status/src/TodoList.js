import { useState } from 'react'
import './TodoList.css'

function TodoList() {
  const [newEntry, setNewEntry] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList([...todoList, newEntry])
    setNewEntry("")
  }

  return (
    <div className="todo-list">
      <div className="entries">
        {todoList.map((entry, i) =>
          <div key={i}>{entry}</div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Escribe aquí..." value={newEntry} onChange={e => setNewEntry(e.target.value)} />
      </form>
    </div>
  );
}

export default TodoList;
