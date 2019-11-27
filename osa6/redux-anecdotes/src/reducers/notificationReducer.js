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

export const setNotification = (message) => { 
  return {
    type: 'SET_NOTIFICATION',
    data: { message: message }
  }
}

export const removeNotification = () => { 
  return { type: 'REMOVE_NOTIFICATION' }
}

export default notificationReducer