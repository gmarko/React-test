import { useState } from 'react'
import './Spinner.css'

function Spinner() {
  const [n, setN] = useState(7);

  const handlePlus = () => {
    setN(n + 1)
  }

  const handleMinus = () => {
    setN(n - 1)
  }


  return (
    <div className="spinner">
      <button onClick={handlePlus}>+</button>
      <div className="display">{n}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default Spinner
