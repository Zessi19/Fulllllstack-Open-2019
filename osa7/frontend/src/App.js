import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Menu from './components/Menu'
import Login from './components/Login'
import User from './components/User'
import UserList from './components/UserList'
import BlogList from './components/BlogList'
import BlogSingleView from './components/BlogSingleView'
import CreateBlog from './components/CreateBlog'
import Togglable from './components/Togglable'
import TopBanner from './components/TopBanner'
import Notification from './components/Notification'

import { initialiseBlogs } from './reducers/blogReducer'
import { initialiseUsers } from './reducers/userReducer'
import { localStorageLogin } from './reducers/loginReducer'

const App = (props) => {

  useEffect(() => {
    props.initialiseBlogs()
    props.initialiseUsers()
  },[])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')

    if (loggedUserJSON) {
      const userToLogin = JSON.parse(loggedUserJSON)
      props.localStorageLogin(userToLogin)
    }
  },[])

  const userById = (id) =>
    props.users.find(i => i.id === id)

  const blogById = (id) =>
    props.blogs.find(i => i.id === id)

  // Render
  if (props.loggedUser === null) {
    return (
      <div>
        <TopBanner/>
        <Notification/>
        <Login/>
      </div>
    )
  }

  return (
    <div>
      <Router>
        <TopBanner/>
        <Menu/>
        <Notification/>

        <Route exact path="/" render={ () =>
          <div>
            <Togglable buttonLabel="New Blog">
              <CreateBlog/>
            </Togglable>
            <BlogList/>
          </div>
        }/>

        <Route exact path="/users" render={ () =>
          <UserList/>
        }/>

        <Route exact path="/users/:id" render={ ({ match }) => 
          <User renderedUser={userById(match.params.id)}/>
        }/>

        <Route exact path="/blogs/:id" render={ ({ match }) => 
          <BlogSingleView renderedBlog={blogById(match.params.id)}/>
        }/>

      </Router>
    </div>
  )
}

const mapDispatchToProps = {
  initialiseBlogs,
  initialiseUsers,
  localStorageLogin
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    loggedUser: state.loggedUser,
    users: state.users,
  }
}

const ConnectedApp
  = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp