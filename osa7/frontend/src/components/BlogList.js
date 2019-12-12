import React from 'react'
import { connect } from 'react-redux'
import BlogListView from './BlogListView'

const BlogList = (props) => {
  return (
    props.blogs
    .sort((a,b) => b.likes - a.likes)
    .map( i =>
      <BlogListView key={i.id} blog={i}/>
    )
  )
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

const ConnectedBlogList
  = connect(mapStateToProps)(BlogList)

export default ConnectedBlogList