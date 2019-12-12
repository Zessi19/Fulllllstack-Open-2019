import React from 'react'
import { connect } from 'react-redux'
import { deleteBlog, updateBlog } from '../reducers/blogReducer'
 
const BlogSingleView = (props) => {
  if (props.renderedBlog === undefined) {
    return null
  }

  // Visibility functions
  const showDeleteButton = () => {
    if (props.renderedBlog.user.id === undefined) {
      if (props.loggedUser.id === props.renderedBlog.user) {
        return true
      }
      return false

    } else {
      if (props.loggedUser.id === props.renderedBlog.user.id) {
        return true
      }
      return false
    }
  }

  const showName = () => {
    if (props.renderedBlog.user.name === undefined) {
      return props.loggedUser.username
    }
    return props.renderedBlog.user.username
  }

  // OnClick functions
  const handleDeleteBlog = () => {
    const message = `Are you sure to delete: ${props.renderedBlog.title}?`

    if (window.confirm(message)) {
      props.deleteBlog(props.renderedBlog.id, props.renderedBlog.title)
    }
  }

  const handleAddLike = () => {
    const updatedObject = {
      ...props.renderedBlog,
      likes: props.renderedBlog.likes+1
    }
    props.updateBlog(updatedObject)
  }

  return (
    <div>
      <h2>{props.renderedBlog.title}</h2>
        <div><b>Author:</b> {props.renderedBlog.author}</div>
        <div><b>URL:</b><a href={`${props.renderedBlog.url}`}>{props.renderedBlog.url}</a></div>
        <div><b>Likes:</b> {props.renderedBlog.likes}</div>
        <div><b>Added by User:</b> {showName()}</div>

        <div><button onClick={handleAddLike}>Like</button></div>
        <div>
          {showDeleteButton()
            ? <div><button onClick={handleDeleteBlog}>Delete</button></div>
            : null}
        </div>
    </div>
  )
}

const mapDispatchToProps = {
  deleteBlog,
  updateBlog
}

const mapStateToProps = (state) => {
  return { loggedUser: state.loggedUser }
}

const ConnectedBlogSingleView
  = connect(mapStateToProps, mapDispatchToProps)(BlogSingleView)

export default ConnectedBlogSingleView