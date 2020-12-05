import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getNote, getNotes} from '../utils/noteHelpers'

export default function List() {
  const [selectedNote, setSelectedNote] = useState()
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  return (
    <ListGroup as="ul">
      {getNotes().map((note) => (
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
