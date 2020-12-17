import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List({selectedNote, setSelectedNote, notes, showArchive}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  if (!notes) return null
  if (!notes.length) {
    if (!showArchive) {
      return <p>Your note list is empty</p>
    } else {
      return <p>You have no archived notes</p>
    }
  }
  return (
    <ListGroup as="ul" className="mb-3">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
