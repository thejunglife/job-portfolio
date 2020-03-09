import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import aboutPic from '../../assets/images/aboutpic.jpg'
import Button from 'react-bootstrap/Button'
import './about.css'
import { useHistory } from 'react-router-dom'

const About = () => {

const history = useHistory()

const visitPortfolio = () => {
  history.push('/portfolio')
}
  return(
    <Container className="imgAbout">
      <Image src={aboutPic}roundedCircle className="picAbout" />
      <div>
        <h1>Who am I?</h1>
        <p>A Full Stack Web Developer that is passionate about writing clean and useful code. Aspiring to deliver heightened user experiences to enhance everyday lives. When I am not coding I enjoy working out at the gym, cycling, running, and enjoying a night in watching a movie!</p>
      </div>
      <Button onClick={() => visitPortfolio()}>Portfolio</Button>
    </Container>
  )
}

export default About