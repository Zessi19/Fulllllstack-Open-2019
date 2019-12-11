import loginService from '../services/login'
import blogService from '../services/blogs'
import { setAndRemoveError } from './notificationReducer'

const loginReducer = (state=null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    
    case 'REMOVE_USER':
      return null

    default:
      return state
  }
}

export const loginToApp = (username, password) => {
  return async dispatch => {
    try {
      const userToLogin = await loginService.login({ username, password })

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(userToLogin))
      blogService.setToken(userToLogin.token)

      dispatch({
        type: 'SET_USER',
        data: {...userToLogin}
      })

    } catch (exception) {
      dispatch(setAndRemoveError(exception.response.data.error, 5))
    }
  }
}

export const localStorageLogin = (userObject) => {
  return async dispatch => {
    blogService.setToken(userObject.token)
    dispatch({
      type: 'SET_USER',
      data: {...userObject}
    })
  }
}

export const logoutFromApp = () => {
  return async dispatch => {
    blogService.nullToken()
    dispatch({
      type: 'REMOVE_USER'
    })
  }
}

export default loginReducer