import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './home.css'

const Home = () => {

  return(
    <div className="home">
  <Jumbotron className="homePage">
    <h1>Hello World!</h1>
      <h2>
        My name is Paul, and I am a Full Stack Web Developer
      </h2>
      <p>
        <Button variant="primary">Learn more</Button>
       </p>
    </Jumbotron>
    </div>
  )
}

export default Home