import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to="/">Blogs</Link>
      <Link style={padding} to="/users">Users</Link>
      <Logout/>
    </div>
  )
}

export default Menu