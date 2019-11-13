import React, { useState, useEffect } from 'react'
import './index.css'

import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'
import Togglable from './components/Togglable'
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

  // Use Effects and Refs //
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

  const blogFormRef = React.createRef()

  // Login/Logout //
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

  // OnClick Funcs
  const addLike = async () => {
    const blogToUpdate = blogFormRef.current.getBlog()
    blogToUpdate.likes = blogToUpdate.likes+1

    try {
      await blogService.update(blogToUpdate.id, blogToUpdate)

      const updatedBlogs = blogs.map( i => {
        if (i.id === blogToUpdate.id) {
          i.likes = i.likes+1
        }
        return i
      })
      setBlogs(updatedBlogs)

    } catch (exception) {
      setErrorMessage(exception.response.data.error)
      setTimeout(() => {setErrorMessage(null)}, 5000)
    }
  }

  const deleteBlog = async () => {
    const blogToRemove = blogFormRef.current.getBlog()
    const message = `Are you sure to delete: ${blogToRemove.title}?`

    if (window.confirm(message)) {
      try {
        await blogService.del(blogToRemove.id)

        setBlogs(blogs.filter(i => i.id !== blogToRemove.id))

        setAlertMessage(`Deleted blog ${blogToRemove.title}`)
        setTimeout(() => {setAlertMessage(null)}, 5000)

      } catch (exception) {
        setErrorMessage(exception.response.data.error)
        setTimeout(() => {setErrorMessage(null)}, 5000)
      }
    }
  }

  // Forms //
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
          Logged in as <b>{user.username}</b>
          <button type="submit">logout</button>
        </p>
      </div>
    </form>
  )

  // List blogs //
  const listBlogs = () => {
    blogs.sort( (a,b) => b.likes - a.likes )

    return blogs.map( i =>
      <Blog
        key={i.id}
        blog={i}
        loggedUser={user}

        addLike={addLike}
        deleteBlog={deleteBlog}
        ref={blogFormRef}
      />
    )
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

      <Togglable buttonLabel="New Blog">
        <CreateBlog
          blogs={blogs} setBlogs={setBlogs}
          setAlertMessage={setAlertMessage}
          setErrorMessage={setErrorMessage}
        />
      </Togglable>

      {'\u00A0'}
      {listBlogs()}
    </div>
  )
}

export default App