import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import List from './components/List'
import Editor from './components/Editor'
import Jumbotron from './components/Jumbotron'
import NewNote from './components/newNote'

function App() {
  return (
    <Container>
      <Jumbotron />
      <Row>
        <Col xs={12} md={4}>
          <NewNote />
          <List />
        </Col>
        <Col xs={12} md={8}>
          <Editor />
        </Col>
      </Row>
    </Container>
  )
}

export default App
