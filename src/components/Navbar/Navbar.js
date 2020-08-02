import React from 'react'

import NavbarLogo from './NavbarLogo/NavbarLogo'
import NavbarMenu from './NavbarMenu/NavbarMenu'

function Navbar() {
  return (
    <div className="navbar-container">
      <NavbarLogo/>
      <NavbarMenu/>
    </div>
  )
}

export default Navbar