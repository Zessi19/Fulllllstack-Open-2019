import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'

import { createBlog } from '../reducers/blogReducer'
import { setAndRemoveError, setAndRemoveAlert } from '../reducers/notificationReducer'

const CreateBlog = (props) => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] = useField('text')

  const handleAddBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0
    }
    props.createBlog(blogObject)
    
    titleReset()
    authorReset()
    urlReset()     
  }

  const newBlogForm = () => {
    return (
      <form onSubmit={handleAddBlog}>
        <div> title: <input {...title}/></div>
        <div> author: <input {...author}/></div>
        <div> url: <input {...url}/></div>

        <button type="submit">create</button>
      </form>
    )
  }

  return (
    <div>
      <h2>Create new Blog</h2>
      {newBlogForm()}
    </div>
  )
}

const mapDispatchToProps = {
  createBlog,
  setAndRemoveError,
  setAndRemoveAlert
}

const ConnectedCreateBlog
  = connect(null, mapDispatchToProps)(CreateBlog)

export default ConnectedCreateBlog