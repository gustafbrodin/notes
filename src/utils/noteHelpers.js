import React, {useState} from 'react'

const notes = [
  {id: 1, title: 'A note', body: 'New note'},
  {id: 2, title: 'A new note', body: 'New note'},
  {id: 3, title: 'Another new note', body: 'New note'},
]

export function createNote(title, body) {
  const note = {
    id: notes.length + 1,
    title,
    body,
  }
  notes.push(note)
  return note
}

export function getNote(id) {
  return notes.find((note) => note.id === id)
}

export function getNotes() {
  return notes
}

export function updateNote(id, title, body) {
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1, note)
  return note
}

export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  notes.splice(indexToDelete, 1)
  return true
}
