import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaInbox, FaClipboard} from 'react-icons/fa'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './components/List'
import Form from './components/Form'
import {getNotes, getArchive} from './api/notes'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])
  const [showArchive, setShowArchive] = useState(false)
  const [archivedNotes, setArchivedNotes] = useState([])

  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    const archivedNotes = getArchive()
    setNotes([...notes])
    setArchivedNotes([...archivedNotes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container>
      <Jumbotron>
        <h1>Notes</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={4}>
          <Button onClick={onClickNewNote} variant="dark" block className="mb-3">
            New note <FaClipboard />
          </Button>
          <List
            notes={showArchive ? archivedNotes : notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
          <Button onClick={() => setShowArchive(!showArchive)} variant="secondary" block>
            Archive <FaInbox />
          </Button>
        </Col>
        <Col xs={12} md={8}>
          <Form refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
