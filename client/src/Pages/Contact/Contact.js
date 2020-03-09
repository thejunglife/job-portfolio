import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import './contact.css'


const Contact = () => {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  })

  contactState.handleInputChange = event => {
    setContactState({
      ...contactState,
      [event.target.name]: event.target.value
    })
  }

  contactState.sendMessage = event => {
    event.preventDefault()
    let sentMessage = {
      name: contactState.name,
      email: contactState.email,
      message: contactState.message
    }
    console.log(sentMessage)
    
    axios({
      method: 'post',
      url: '/send',
      data: {
        name: contactState.name,
        email: contactState.email,
        message: contactState.message
      }
    })
      .then((response) => {
        if (response.data.msg === 'success') {
          alert("Message Sent.")
          setContactState({ ...contactState, name: '', email: '', message: ''})
         } else if (response.data.msg === "fail") {
           alert("Message failed to send.")
         }
      })
  }

  return (
    <Form className="contactPage">
    <h1 className="contactTitle">CONTACT</h1>
    <h5 className ="contactLine">Have any questions or want to collabarate?</h5>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="name"
          value={contactState.name}
          onChange={contactState.handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          value={contactState.email}
          onChange={contactState.handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows="3"
          value={contactState.message}
          onChange={contactState.handleInputChange}
        />
      </Form.Group>
      <Button type="submit" onClick={contactState.sendMessage}>
        Send
      </Button>
    </Form>
  )
}

export default Contact
