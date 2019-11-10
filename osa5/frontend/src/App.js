import React, { useState, useEffect } from 'react'
import './index.css'

import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'
import Notification from './components/Notification'

import loginService from './services/login' 
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // USE EFFECTS //
  useEffect(() => {
    blogService
      .getAll()
      .then(serverBlogs => setBlogs(serverBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')

    if (loggedUserJSON) {
      const userToLogin = JSON.parse(loggedUserJSON)
      setUser(userToLogin)
      blogService.setToken(userToLogin.token)
    }
  }, [])

  // HANDLE FUNCS //
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const userToLogin = await loginService.login({ username, password })

      window.localStorage
        .setItem('loggedBlogAppUser', JSON.stringify(userToLogin))
      
      blogService.setToken(userToLogin.token)
      setUser(userToLogin)  
      setUsername('')
      setPassword('')

    } catch (exception) {
      setErrorMessage(exception.response.data.error)
      setTimeout(() => {setErrorMessage(null)}, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBlogAppUser')
    blogService.nullToken()
    window.location.reload()
  }

  // FORMS //
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username:
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password:
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const logoutForm = () => (
    <form onSubmit={handleLogout}>
      <div>
        <p>
          Logged in as <b>{user.name}</b>       
          <button type="submit">logout</button>
        </p>
      </div>
    </form>
  )

  // FUNCS //
  const showAllBlogs = () => {
    return blogs.map( i => <Blog key={i.id} blog={i}/> )
  }

  // RENDER //
  if (user === null) {
    return (
      <div>
        <h1>Blogs</h1>
        <Notification alertMessage={alertMessage} errorMessage={errorMessage}/>

        <h2>Login to Application</h2>
        {loginForm()}
      </div>
    )
  }

  return (
    <div>
      <h1>Blogs</h1>
      <Notification alertMessage={alertMessage} errorMessage={errorMessage}/>
      {logoutForm()}

      <CreateBlog 
        blogs={blogs} setBlogs={setBlogs}
        alertMessage={alertMessage} setAlertMessage={setAlertMessage}
        errorMessage={errorMessage} setErrorMessage={setErrorMessage}  
      />
      {showAllBlogs()}
    </div>
  )
}

export default App;