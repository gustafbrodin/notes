import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Editor() {
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter title" />
      </Form.Group>
      <Form.Group controlId="formNote">
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter note" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>{' '}
      <Button variant="danger" type="submit">
        Delete
      </Button>
    </Form>
  )
}
