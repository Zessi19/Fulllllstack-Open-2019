import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { Form, Button } from 'semantic-ui-react'

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
      likes: 0,
      comments: []
    }
    props.createBlog(blogObject)
    
    titleReset()
    authorReset()
    urlReset()     
  }

  const newBlogForm = () => {
    return (
      <Form onSubmit={handleAddBlog}>
        <Form.Field>
          <label> title: </label>
          <input {...title}/>
        </Form.Field>
        <Form.Field>
          <label> author: </label>
          <input {...author}/>
        </Form.Field>
        <Form.Field>
          <label> url: </label>
          <input {...url}/>
        </Form.Field>
        <Button color='blue' type="submit">create</Button>
      </Form>
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