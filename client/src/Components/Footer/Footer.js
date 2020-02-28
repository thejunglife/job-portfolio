import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './footer.css'

const Footer = () => {
  return(
      <Navbar bg="dark" variant="dark" expand="sm" sticky="bottom">
        <div className="footerBot">
          <h4>Social Media</h4>
          <h4>Paul Jung 	&#169; 2020</h4>
        </div>
      </Navbar>
    
  )
}

export default Footer