import { useState } from 'react'
import './Spoiler.css'

function Spoiler({ children }) {
  const [n, setN] = useState(false);

  return (
    <span className={'spoiler ' + (n ? 'reveal' : 'hidden')} onClick={() => setN(!n)}>
      {children}
    </span>
  )
}

export default Spoiler
