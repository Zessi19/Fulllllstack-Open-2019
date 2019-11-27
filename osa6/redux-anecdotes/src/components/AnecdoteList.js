import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (id, content) => () => {
    props.addVote(id)

    const message = `Voted Blog: ${content}`
    props.setNotification(message)
    setTimeout(() => props.removeNotification(), 5000)
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
          <button onClick={vote(i.id, i.content)}> vote </button>
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
  setNotification,
  removeNotification
}

const ConnectedAnecdoteList
  = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList