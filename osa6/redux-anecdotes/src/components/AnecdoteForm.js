import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.createAnecdote(content)

    const message = `Added Blog: ${content}`
    props.setNotification(message)
    setTimeout(() => props.removeNotification(), 5000)
  }

  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name="anecdote" autoComplete="off"/>
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  removeNotification
}

const ConnectedAnecdoteForm
  = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm