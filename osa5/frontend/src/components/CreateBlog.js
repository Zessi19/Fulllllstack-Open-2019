import React from 'react'
import { useField } from '../hooks'
import blogService from '../services/blogs'

const CreateBlog = ({ blogs, setBlogs, setAlertMessage, setErrorMessage }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleAddBlog = async (event) => {
    event.preventDefault()

    try {
      const blogObject = {
        title: title.value,
        author: author.value,
        url: url.value,
        likes: 0
      }

      const newBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(newBlog))

      title.reset()
      author.reset()
      url.reset()

      setAlertMessage(`Added new blog: ${title.value}`)
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
        <input {...title}/>
      </div>
      <div>
        author:
        <input {...author}/>
      </div>
      <div>
        url:
        <input {...url}/>
      </div>

      <button type="submit">create</button>
    </form>
  )

  return (
    <div>
      <h2>Create new Blog</h2>
      {newBlogForm()}
    </div>
  )
}

export default CreateBlog