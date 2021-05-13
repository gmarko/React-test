import './Spoiler.css'

function Spoiler({ children }) {
  return (
    <span className="spoiler">
      {children}
    </span>
  )
}

export default Spoiler;
