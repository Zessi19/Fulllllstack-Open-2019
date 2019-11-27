import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {

    case 'NEW_ANECDOTE':
      return [...state, action.data]

    case 'VOTE':
      return state.map(
        i => i.id !== action.data.id ? i : action.data
      )

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)    
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const addVote = (id, anecdoteObject) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, anecdoteObject)    
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer