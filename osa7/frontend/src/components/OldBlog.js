import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteBlog, updateBlog } from '../reducers/blogReducer'

const Blog = (props) => {

  // Visibility states and Inline-Style
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  // Button and User visibility
  const showDeleteButton = () => {
    if (props.blog.user.id === undefined) {
      if (props.loggedUser.id === props.blog.user) {
        return true
      }
      return false

    } else {
      if (props.loggedUser.id === props.blog.user.id) {
        return true
      }
      return false
    }
  }

  const showName = () => {
    if (props.blog.user.name === undefined) {
      return props.loggedUser.username
    }
    return props.blog.user.username
  }

  // OnClick functions
  const handleDeleteBlog = () => {
    const message = `Are you sure to delete: ${props.blog.title}?`

    if (window.confirm(message)) {
      props.deleteBlog(props.blog.id, props.blog.title)
    }
  }

  const handleAddLike = () => {
    const updatedObject = {
      ...props.blog,
      likes: props.blog.likes+1
    }
    props.updateBlog(updatedObject)
  }

  // Render
  return (
    <div style={blogStyle} className="blogView">

      <div style={hideWhenVisible} onClick={toggleVisibility} className="defaultView">
        {props.blog.title} {props.blog.author}
      </div>

      <div style={showWhenVisible} onClick={toggleVisibility} className="expandedView">
        <div><b>Title:</b> {props.blog.title}</div>
        <div><b>Author:</b> {props.blog.author}</div>
        <div><b>URL:</b> {props.blog.url}</div>
        <div><b>Likes:</b> {props.blog.likes}</div>
        <div><b>Added by User:</b> {showName()}</div>
        <div><button onClick={handleAddLike}>Like</button></div>

        { showDeleteButton()
          ? <div><button onClick={handleDeleteBlog}>Delete</button></div>
          : null
        }
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

const ConnectedBlog
  = connect(mapStateToProps, mapDispatchToProps)(Blog)

export default ConnectedBlog