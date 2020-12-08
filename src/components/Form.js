import React, {useState, useEffect} from 'react'
import BootstrapForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {createNote, getNotes, updateNote} from '../utils/noteHelpers'

export default function Form({selectedNote, refreshList}) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if (selectedNote) setTitle(selectedNote.title)
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) setBody(selectedNote.body)
  }, [selectedNote])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }

    createNote(title, body)
    refreshList()
  }
  return (
    <BootstrapForm>
      <BootstrapForm.Group controlId="formTitle">
        <BootstrapForm.Label>Title</BootstrapForm.Label>
        <BootstrapForm.Control value={title} onChange={onChangeTitle} />
      </BootstrapForm.Group>
      <BootstrapForm.Group controlId="formNote">
        <BootstrapForm.Label>Note</BootstrapForm.Label>
        <BootstrapForm.Control as="textarea" rows={3} value={body} onChange={onChangeBody} />
      </BootstrapForm.Group>
      <Button variant="success" onClick={onSave}>
        Save
      </Button>
    </BootstrapForm>
  )
}
