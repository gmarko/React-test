import { useState } from 'react'
import './Toggle.css'

function Toggle() {
  const [n, setN] = useState(true);

  return (
    <div className={'toggle ' + (n ? 'enabled' : 'disabled')} onClick={() => setN(!n)}>
      <span>{n ? 'ON' : 'OFF'}</span>
      <div className="indicator" />
    </div>
  )
}

export default Toggle
