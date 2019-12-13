import React from 'react'
import { connect } from 'react-redux'
import { logoutFromApp } from '../reducers/loginReducer'

const Logout = (props) => {

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')

    props.logoutFromApp()
    window.location.reload()
  }

  const logoutForm = () => (
    <form onSubmit={handleLogout}>
      <p>
        Logged in as <b>{props.loggedUser.username}</b>
        <button type="submit">logout</button>
      </p>
    </form>
  )

  return (
    logoutForm()
  )
}

const mapStateToProps = (state) => {
  return { loggedUser: state.loggedUser }
}

const mapDispatchToProps = {
  logoutFromApp
}

const ConnectedLogout
  = connect(mapStateToProps, mapDispatchToProps)(Logout)

export default ConnectedLogout