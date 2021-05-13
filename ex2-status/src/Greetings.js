import { useState } from 'react'

function Greetings() {
  const [name, setName] = useState("");

  return (
    <div className="greetings">
      <div>
        ¿Cómo te llamas?
        <input placeholder="Nombre..." value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setName("")}>X</button>
      </div>
      Hola, {name}
    </div>
  )
}

export default Greetings
