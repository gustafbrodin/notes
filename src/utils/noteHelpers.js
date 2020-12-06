import React, {useState} from 'react'

const notes = [
  {id: '1', title: 'A note', body: 'New note'},
  {id: '2', title: 'A new note', body: 'New note'},
  {id: '3', title: 'Another new note', body: 'New note'},
]

function CreateNote(title, body) {
  // const [value, setValue] = React.useState('')
}

// export function getNote(id) {
//   return notes.id notes.title, notes.body
// }

export function getNotes() {
  return notes
}

function updateNote(id, title, body) {
  // const foundNote = notes.find((element) => element.id === id)
  // return
}

function deleteNote() {}
