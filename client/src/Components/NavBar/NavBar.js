import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="#home">Paul Jung</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="/about"><Link to="/about">About</Link></Nav.Link>
          <Nav.Link href="/portfolio"><Link to="/portfolio">Portfolio</Link></Nav.Link>
          <Nav.Link href="/resume"><Link to="/resume">Resume</Link></Nav.Link>
          <Nav.Link href="/contact"><Link to="/contact">Contact</Link></Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar