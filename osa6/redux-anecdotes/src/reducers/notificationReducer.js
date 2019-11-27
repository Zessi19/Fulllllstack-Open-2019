const notificationReducer = (state = null, action) => {

  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.message

    case 'REMOVE_NOTIFICATION':
      return null

    default:
      return state
  }
}

/*export const setNotification = (message) => { 
  return {
    type: 'SET_NOTIFICATION',
    data: { message: message }
  }
}

export const removeNotification = (timeSeconds) => {
  return { type: 'REMOVE_NOTIFICATION' }
}*/

export const setAndRemoveNotification = (message, timeSeconds) => {
  return async (dispatch) => {
    await dispatch({type:'SET_NOTIFICATION', data:{message: message}})
    setTimeout(() => dispatch({type: 'REMOVE_NOTIFICATION'}), 1000*timeSeconds)
  }
}

export default notificationReducer