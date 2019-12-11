import React,  {useState}  from 'react'
import { connect } from 'react-redux'
import { loginToApp } from '../reducers/loginReducer'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (event) => {
    event.preventDefault()

    props.loginToApp(username, password)
    setUsername('')
    setPassword('')
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div> username:
        <input type="text" value={username} name="Username"
          onChange={({ target }) => setUsername(target.value)}/>
      </div>
      <div> password:
        <input type="password" value={password} name="Password"
          onChange={({ target }) => setPassword(target.value)}/>
      </div>
      <button type="submit">login</button>
    </form>
  )

  return (
    <div>
      <h2>Login to Application</h2>
      {loginForm()}
    </div>
  )
}

const mapDispatchToProps = {
  loginToApp
}

const ConnectedLogin
  = connect(null, mapDispatchToProps)(Login)

export default ConnectedLogin