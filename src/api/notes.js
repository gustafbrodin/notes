function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

function initializeArchive() {
  localStorage.setItem('archive', JSON.stringify([]))
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
    return initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function updateNote(id, title, body) {
  const notes = getNotes()
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

export function deleteFromArchive(id) {
  const archive = getArchive()
  const indexToDelete = archive.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) archive.splice(indexToDelete, 1)
  const jsonArchiveArray = JSON.stringify(archive)
  localStorage.setItem('archive', jsonArchiveArray)
  return true
}

export function archiveNote(note) {
  const archive = getArchive()
  deleteNote(note.id)
  archive.push(note)
  const jsonArchiveArray = JSON.stringify(archive)
  localStorage.setItem('archive', jsonArchiveArray)
}

export function restoreNote(note) {
  const notes = getNotes()
  notes.push(note)
  deleteFromArchive(note.id)

  deleteNote(note.id)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getArchive(note) {
  let archive = localStorage.getItem('archive')
  if (!archive) {
    return initializeArchive()
  }
  const parsedArchive = JSON.parse(archive)
  return parsedArchive
}

export function updateArchivedNote(id, title, body) {
  const archive = getArchive()
  const indexToUpdate = archive.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  archive.splice(indexToUpdate, 1)
  archive.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(archive)
  localStorage.setItem('archive', jsonNoteArray)
  return archive
}
