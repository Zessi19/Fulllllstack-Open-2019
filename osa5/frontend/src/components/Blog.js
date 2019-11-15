import React, { useState, useImperativeHandle } from 'react'

const Blog = React.forwardRef((props, ref) => {

  // Visibility and Inline-Style //
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

  // Imperative Hooks
  const getBlog = () => {
    const blogObj = {
      id: props.blog.id,
      title: props.blog.title,
      author: props.blog.author,
      url: props.blog.url,
      likes: props.blog.likes
    }
    return blogObj
  }

  useImperativeHandle(ref, () => {
    return {
      getBlog
    }
  })

  // Button visibility
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
        <div><button onClick={props.addLike}>Like</button></div>

        { showDeleteButton()
          ? <div><button onClick={props.deleteBlog}>Delete</button></div>
          : null
        }
      </div>

    </div>
  )
})

export default Blog