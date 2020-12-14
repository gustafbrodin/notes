import React, {useState} from 'react'

function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

export function createNote(title, body) {
  const notes = getNotes()
  const newNote = {
    id: Date.now(),
    title,
    body,
  }
  notes.push(newNote)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}

export function getNotes() {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    notes = initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function updateNote(id, title, body) {
  const notes = getNotes()
  console.log(notes)
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1)
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return notes
}

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return true
}
