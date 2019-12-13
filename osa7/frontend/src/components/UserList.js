import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Segment, Header } from 'semantic-ui-react'

const UserList = (props) => {

  const userRows = () => {
    return (
      props.users
      .sort((a,b) => a.username.localeCompare(b.username))
      .map(i => <ListedUser key={i.id} listedUser={i}/>)
  )}

  return (
    <div>
      <Segment inverted>
        <Header as='h3' inverted color='blue'>
          Users
        </Header>
      </Segment>

      <Table striped celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell> Username </Table.Cell>
            <Table.Cell> Blogs created </Table.Cell>
          </Table.Row>
          {userRows()}
        </Table.Body>
      </Table>
    </div>
  )
}

const ListedUser = (props) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Link to={`/users/${props.listedUser.id}`}>
          {props.listedUser.username}
        </Link>
      </Table.Cell>

      <Table.Cell>
        {Object.keys(props.listedUser.blogs).length}
      </Table.Cell>
    </Table.Row>
)}

const mapStateToProps = (state) => {
  return { users: state.users }
}

const ConnectedUserList
  = connect(mapStateToProps)(UserList)

export default ConnectedUserList