import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

const NotesList = ({ notes, remove }) => {
  const renderNotes = notes.map(note => (
    <div key={note._id}>
      <h3>{note.title}</h3>
      <div>{note.description}</div>
      <div>{`Дата создания: ${moment(note.createdAt).format('MM.DD.YYYY')}`}</div>
      <div>{moment(note.createdAt).fromNow()}</div>
      <button onClick={() => remove(note._id)}>X</button>
    </div>
  ))
  return (
    <div className='notes'>
      {notes.length !== 0 ? renderNotes : 'пусто'}
    </div>
  )
}

export default NotesList