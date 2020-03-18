import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './home.css'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const visitAbout = () => {
    history.push('/about')
  }

  return(
    <div className="home">
      <Jumbotron className="homePage">
        <h1>Hello World!</h1>
        <h2>
          My name is Paul Jung, and I am a Full Stack Web Developer
        </h2>
        <p>
          <Button variant="primary"> <a href="#about">About</a></Button>
       </p>
      </Jumbotron>
    </div>
  )
}

export default Home