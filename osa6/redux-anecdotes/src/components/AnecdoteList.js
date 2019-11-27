import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setAndRemoveNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (id) => () => {
    const oneToVote = props.anecdotes.find(i => i.id === id)

    const updatedAnecdote = {
      ...oneToVote,
      votes: oneToVote.votes+1
    }
    props.addVote(id, updatedAnecdote)

    const message = `Voted Blog: ${updatedAnecdote.content}`
    props.setAndRemoveNotification(message, 5)
  }

  return(
    props.filteredList
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

const filterAnecdotes = (props) => {
  const listAll = props.anecdotes

  const listFiltered = listAll.filter(
      i => i.content.substring(0, props.filter.length).toLowerCase() === props.filter.toLowerCase()
  )
  return listFiltered
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    filteredList: filterAnecdotes(state)
  }
}

const mapDispatchToProps = {
  addVote,
  setAndRemoveNotification
}

const ConnectedAnecdoteList
  = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)


export default ConnectedAnecdoteList