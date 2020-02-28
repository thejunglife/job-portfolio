import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import aboutPic from '../../assets/images/aboutpic.jpg'
import './about.css'

const About = () => {

  return(
    <Container className="imgAbout">
      <Image src={aboutPic}roundedCircle className="picAbout" />
      <div>
        <h1>Who am I?</h1>
        <p>A Full Stack Web Developer that is passionate about writing useful code</p>
      </div>
    </Container>
  )
}

export default About