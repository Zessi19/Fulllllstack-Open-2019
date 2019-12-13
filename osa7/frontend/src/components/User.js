import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

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
      <Segment inverted>
        <Header as='h3' inverted color='blue'>
          {props.renderedUser.username}
        </Header>
      </Segment>

      <h3>Added Blogs</h3>
      <ul>
        {listBlogsByUSer()}
      </ul>
    </div>
  )
}

export default User