import blogService from '../services/blogs'
import { setAndRemoveAlert, setAndRemoveError } from './notificationReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {

    case 'INIT_BLOGS':
      return action.data

    case 'NEW_BLOG':
      return [...state, action.data]

    case 'DELETE_BLOG':
      return state.filter(i => i.id !== action.data.id)

    case 'UPDATE_BLOG':
      return state.map(
        i => i.id !== action.data.id ? i : action.data
      )

    default:
      return state
  }
}

export const initialiseBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(content)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog
      })
      dispatch(setAndRemoveAlert(`Added new blog: ${newBlog.title}`, 5))

    } catch (exception) {
      dispatch(setAndRemoveError(exception.response.data.error, 5))
    }
  }
}

export const deleteBlog = (id, title) => {
  return async dispatch => {
    try {
      await blogService.del(id)
      dispatch({
        type: 'DELETE_BLOG',
        data: { id: id }
      })
      dispatch(setAndRemoveAlert(`Deleted blog ${title}`, 5))

    } catch (exception) {
      dispatch(setAndRemoveError(exception.response.data.error, 5))
    }
  }
}

export const updateBlog = (blog) => {
  return async dispatch => {
    try {
      await blogService.update(blog.id, blog)
      dispatch({
        type: 'UPDATE_BLOG',
        data: { ...blog }
      })
      dispatch(setAndRemoveAlert(`Liked blog ${blog.title}`, 2))

    } catch (exception) {
      dispatch(setAndRemoveError(exception.response.data.error, 5))
    }
  }
}

export const addComment = (newBlog) => {
  return async dispatch => {
    try {
      await blogService.update(newBlog.id, newBlog)
      dispatch({
        type: 'UPDATE_BLOG',
        data: { ...newBlog }
      })
      dispatch(setAndRemoveAlert(`Added comment to ${newBlog.title}`, 2))

    } catch (exception) {
      dispatch(setAndRemoveError(exception.response.data.error, 5))
    }
  }
}

export default blogReducer