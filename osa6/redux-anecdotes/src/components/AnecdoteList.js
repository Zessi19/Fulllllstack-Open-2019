import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdoteList = props.store.getState()

  const vote = (id) => () => {
    props.store.dispatch(addVote(id))
  }

  return (
    anecdoteList
    .sort((a,b) => b.votes - a.votes)
    .map(i =>
      <div key={i.id}>
        <div>
          {i.content}
        </div>
        <div>
          has {i.votes}
          <button onClick={vote(i.id)}> vote </button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList