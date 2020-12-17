import React, {useState, useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaInbox, FaClipboard, FaStickyNote} from 'react-icons/fa'
import List from './List'
import Form from './Form'
import {getNotes, getArchive} from '../api/notes'
import {NoteContext} from '../context/NoteContext'

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [showArchive, setShowArchive] = useState(false)
  const [archivedNotes, setArchivedNotes] = useState([])
  const {notes, setNotes} = useContext(NoteContext)

  useEffect(() => {
    const archive = getArchive()
    setArchivedNotes(archive)
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
            showArchive={showArchive}
          />
          <Button
            onClick={() => setShowArchive(!showArchive)}
            variant={showArchive ? 'primary' : 'secondary'}
            block
          >
            {showArchive ? 'Notes ' : 'Archive '}
            {showArchive ? <FaStickyNote /> : <FaInbox />}
          </Button>
        </Col>
        <Col xs={12} md={8}>
          <Form isArchived={showArchive} refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}
