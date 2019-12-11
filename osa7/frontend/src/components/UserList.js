import React from 'react'
import { connect } from 'react-redux'
//import Blog from './Blog'

const UserList = (props) => {

  const testFunc = async () => {

    console.log(props.users)
  } 

  testFunc()

  return (
    <div>
      <h2>Users</h2>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

const ConnectedUserList
  = connect(mapStateToProps)(UserList)

export default ConnectedUserList