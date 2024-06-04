import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/services">Our Services</Link>
      <Link to="/shop">Shop Now</Link>
    </div>
  )
}

export default NavBar
