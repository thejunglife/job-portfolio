import React from 'react'
import ReactDom from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import Navbar from 'react-bootstrap/Navbar'
import './footer.css'

const Footer = () => {
  return(
      <Navbar bg="dark" variant="dark" expand="sm" sticky="bottom">
        <div className="footerBot">
          <SocialIcon url="https://www.linkedin.com/in/paulsjung/" target="_blank" /> <SocialIcon url="https://github.com/thejunglife" target="_blank" />
          <h4>Paul Jung 	&#169; 2020</h4>
        </div>
      </Navbar>
    
  )
}

export default Footer