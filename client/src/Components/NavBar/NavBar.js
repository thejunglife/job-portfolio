import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Scrollspy from 'react-scrollspy'

const NavBar = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
        <Navbar.Brand href="#home">Paul Jung</Navbar.Brand>
          <Scrollspy items={ ['home', 'about', 'portfolio', 'resume' ] } currentClassName="is-current">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Scrollspy>
      </Navbar>
    </>
  )
}

export default NavBar