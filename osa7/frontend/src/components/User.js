import React from 'react'
//import { connect } from 'react-redux'

const User = (props) => {

  if ( props.renderedUser === undefined) { 
    return null
  }

  const listBlogsByUSer = () => {
    return (
      props.renderedUser.blogs
      .map(i => <li key={i.id}> {i.title} </li>)
  )}

  return (
    <div>
      <h2>{props.renderedUser.username}</h2>
      <h3>Added Blogs</h3>
      <ul>
        {listBlogsByUSer()}
      </ul>
    </div>
  )
}

export default User