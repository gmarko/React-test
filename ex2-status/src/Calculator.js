import { useState } from 'react'

function Calculator() {
  const [n, setN] = useState(1);

  return (
    <div className="calculator">
      Valor: {n};
      <button onClick={() => setN(n * 2)}>*2</button>
      <button onClick={() => setN(n * 3)}>*3</button>
      <button onClick={() => setN(n - 2)}>-2</button>
      <button onClick={() => setN(n - 3)}>-3</button>
    </div>
  )
}

export default Calculator
