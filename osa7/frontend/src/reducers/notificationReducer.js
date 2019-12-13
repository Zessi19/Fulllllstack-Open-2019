const initialState = {
  alert: null,
  error: null
}

const notificationReducer = (state=initialState, action) => {

  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, ...action.data }

    case 'REMOVE_NOTIFICATION':
      return { ...state, ...action.data }

    default:
      return state
  }    
}

export const setAndRemoveAlert = (message, timeSeconds) => {
  return async (dispatch) => {
    await dispatch({type:'SET_NOTIFICATION', data:{alert: message}})
    setTimeout(() => dispatch({type: 'REMOVE_NOTIFICATION', data:{alert: null}}), 1000*timeSeconds)
  }
}

export const setAndRemoveError = (message, timeSeconds) => {
  return async (dispatch) => {
    await dispatch({type:'SET_NOTIFICATION', data:{error: message}})
    setTimeout(() => dispatch({type: 'REMOVE_NOTIFICATION', data:{error: null}}), 1000*timeSeconds)
  }
}

export default notificationReducer