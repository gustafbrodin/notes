import React from 'react'
import Notes from './components/notes'
import NotesProvider from './context/NoteContext'

export default function App() {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  )
}
