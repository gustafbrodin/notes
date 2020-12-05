import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import List from './components/List'

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <List />
        </Col>
        <Col xs={12} md={8}>
          {/* <Editor /> */}
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  )
}

export default App
