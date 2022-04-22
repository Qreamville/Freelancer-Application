import React from 'react'
import "./navigation.css"
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand="md" >
      <Navbar.Brand>
        Payme
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse-id" />
      <Navbar.Collapse id="navbar-collapse-id">
        <Nav>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link >Sign in</Nav.Link>
          <Nav.Link className='nav-sign btn btn-outline-primary'>Sign up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Navigation
