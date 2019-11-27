import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  }, [])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification/>
      <AnecdoteForm/>

      <h2>Listed Anecdotes</h2>
      <Filter/>
      <AnecdoteList/>
    </div>
  )
}

const ConnectedApp = connect(null, { initializeAnecdotes})(App)

export default ConnectedApp