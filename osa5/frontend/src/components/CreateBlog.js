import React, { useState } from 'react';
import blogService from '../services/blogs'

const CreateBlog = ({blogs, setBlogs, alertMessage, setAlertMessage, errorMessage, setErrorMessage}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleAddBlog = async (event) => {
    event.preventDefault()
    try {
      const blogObject = {
        title: title,
        author: author,
        url: url,
        likes: 0
      }

      const newBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(newBlog))

      setTitle('')
      setAuthor('')
      setUrl('')

      setAlertMessage(`Added new blog: ${title}`)
      setTimeout(() => {setAlertMessage(null)}, 5000)

    } catch (exception) {
      setErrorMessage(exception.response.data.error)
      setTimeout(() => {setErrorMessage(null)}, 5000)
    }
  }

  const newBlogForm = () => (
    <form onSubmit={handleAddBlog}>
      <div>
        title:
        <input
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:
        <input
          type="text"
          value={author}
          name="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={url}
          name="Url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>

      <button type="submit">Create Blog</button>
    </form>
  )

  return (
    <div>
      <h2>Create new Blog</h2>
      {newBlogForm()}
      {'\u00A0'}
    </div>
  )
}

export default CreateBlog