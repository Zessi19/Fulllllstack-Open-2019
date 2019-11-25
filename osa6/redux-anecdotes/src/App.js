import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = (props) => {

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteList store={props.store}/>
      <AnecdoteForm store={props.store}/>
    </div>
  )
}

export default App