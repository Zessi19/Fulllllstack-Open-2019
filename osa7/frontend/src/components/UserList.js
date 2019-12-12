import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserList = (props) => {

  const userRows = () => {
    return (
      props.users
      .sort((a,b) => a.username.localeCompare(b.username))
      .map(i => <ListedUser key={i.id} listedUser={i}/>)
  )}

  return (
    <div>
      <h2>Users</h2>
      <table style={{width: '400px'}}>
        <tbody>
        <tr align='left'>
          <th>Username</th>
          <th>Blogs created</th>
        </tr>
          {userRows()}
        </tbody>
      </table>
    </div>
  )
}

const ListedUser = (props) => {
  return (
    <tr>
      <td>
        <Link to={`/users/${props.listedUser.id}`}>
          {props.listedUser.username}
        </Link>
      </td>
      <td>{Object.keys(props.listedUser.blogs).length}</td>
    </tr>
)}

const mapStateToProps = (state) => {
  return { users: state.users }
}

const ConnectedUserList
  = connect(mapStateToProps)(UserList)

export default ConnectedUserList