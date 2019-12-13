import React from 'react'
import { Link } from 'react-router-dom'

const BlogListView = (props) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  // Render
  return (
    <div style={blogStyle} className="blogView">
      <Link to={`/blogs/${props.blog.id}`}>
        {props.blog.title}
      </Link>
    </div>
  )
}

export default BlogListView