import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './portfolio.css'
import harmonize from '../../assets/images/harmonizePic.png'
import laf from '../../assets/images/lafPic.png'
import clicky from '../../assets/images/clickyGame.png'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const Portfolio = () => {
  const history = useHistory()

  const visitContact = () => {
    history.push('/contact')
  }

  return(

<div className="projectPage">
 <Container>
    <h1 className="projectText">PROJECTS</h1>
  <Row>
    <Col sm>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={harmonize} />
        <Card.Body>
          <Card.Title>Harmonize</Card.Title>
          <Card.Text>
            A social media platform for musicians looking to collaborate with other musicians.
          </Card.Text>
          <Card.Link href="https://harmonizers.herokuapp.com/" target="_blank">Go to app</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    <Col sm>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={laf} />
        <Card.Body>
          <Card.Title>LAF</Card.Title>
          <Card.Text>
            Full stack application that digitizes Lost and Found for events or businesses.
          </Card.Text>
          <Card.Link href="https://the-laf-app.herokuapp.com/" target="_blank">Go to app</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    <Col sm>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={clicky} />
        <Card.Body>
          <Card.Title>Clicky Game</Card.Title>
          <Card.Text>
            Fun react game try to click a different picture for the highest score!
          </Card.Text>
          <Card.Link href="https://vast-temple-64190.herokuapp.com/" target="_blank">Go to app</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  <h5 className="projectText">Lets talk!</h5>
  <div className="projectBtn">
  <Button onClick={() => visitContact()}>Contact</Button>
  </div>
</Container>
</div>
  )
}

export default Portfolio