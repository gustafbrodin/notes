import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import List from './components/List'
import NewNote from './components/NewNote'
import Jumbotron from './components/Jumbotron'
import NewNoteButton from './components/newNoteButton'

function App() {
  return (
    <Container>
      <Jumbotron />
      <Row>
        <Col xs={12} md={4}>
          <NewNoteButton />
          <List />
        </Col>
        <Col xs={12} md={8}>
          <NewNote />
        </Col>
      </Row>
    </Container>
  )
}

export default App
