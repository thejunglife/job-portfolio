import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './portfolio.css'
import portPic from '../../assets/images/aboutpic.jpg'
import harmonize from '../../assets/images/harmonizePic.png'
import laf from '../../assets/images/lafPic.png'

const Portfolio = () => {

  return(
<div className="projectPage">
 <Container>
    <h1>PROJECTS</h1>
  <Row>
    <Col sm>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={harmonize} />
        <Card.Body>
          <Card.Title>Harmonize</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="https://the-laf-app.herokuapp.com/">Go to app</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    <Col sm>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={portPic} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
</div>
  )
}

export default Portfolio