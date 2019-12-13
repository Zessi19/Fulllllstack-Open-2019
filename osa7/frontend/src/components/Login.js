import React,  { useState }  from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
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
    <Form onSubmit={handleLogin}>
      <Form.Field>
      <label>username:</label>
      <input type="text" value={username} name="Username"
        onChange={({ target }) => setUsername(target.value)}/>
      </Form.Field>

      <Form.Field>
      <label>password:</label>
      <input type="password" value={password} name="Password"
        onChange={({ target }) => setPassword(target.value)}/>
      </Form.Field>
      
      <Button color='blue' type="submit">login</Button>
    </Form>
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