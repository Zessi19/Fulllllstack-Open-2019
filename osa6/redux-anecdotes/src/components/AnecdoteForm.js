import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setAndRemoveNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const newAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)

    const message = `Added Blog: ${content}`
    props.setAndRemoveNotification(message, 5)
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
  setAndRemoveNotification
}

const ConnectedAnecdoteForm
  = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm