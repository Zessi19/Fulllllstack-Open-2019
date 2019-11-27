import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {

  test('Reducer is pure function', () => {
    const state = []
    const action = {type: 'DO_NOTHING'}

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toEqual(state)
  })

})