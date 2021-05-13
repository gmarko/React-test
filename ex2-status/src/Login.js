import { useState } from 'react'

function Login({ defaultUser }) {
  const [username, setUsername] = useState(defaultUser)
  const [password, setPassword] = useState("")
  const [completed, setCompleted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Has hecho submit!', username, password);
    setCompleted(true)
  }

  const handleClick = (e) => {
    console.log('Has clickado!', defaultUser);
  }

  if (completed) {
    return (
      <div>
        Bienvenido, {username}!
      </div>
    )
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input placeholder="User..." value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input placeholder="Pass..." value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </label>
        <br />
        <button>Log in</button>
        <button type="button" onClick={handleClick}>Help</button>
      </form>
  );
}

export default Login;
