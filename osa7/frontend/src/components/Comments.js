import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { Form, Button } from 'semantic-ui-react'
import { addComment } from '../reducers/blogReducer'

const Comments = (props) => {
  const [comment, commentReset] = useField('text')

  const handleComment = async (event) => {
    event.preventDefault()

    const newBlogObject = {
      ...props.renderedBlog,
      comments: [...props.renderedBlog.comments, comment.value]
    }
    props.addComment(newBlogObject)
    commentReset()
  }

  const newCommentForm = () => {
    return (
      <Form onSubmit={handleComment}>
        <Form.Field>
          <input {...comment}/>
          <Button color='blue' type="submit">Send </Button>
        </Form.Field>
      </Form>
    )
  }

  const listComments = () => {
    return (
      props.renderedBlog.comments
        .map(i => <li key={i}> {i} </li>)
  )}

  return (
    <div>
      {'\u00A0'}
      <h3>Comments:</h3>
      {newCommentForm()}
      {'\u00A0'}
      {listComments()}
    </div>
  )
}

const mapDispatchToProps = {
  addComment
}

const ConnectedComments
  = connect(null, mapDispatchToProps)(Comments)

export default ConnectedComments