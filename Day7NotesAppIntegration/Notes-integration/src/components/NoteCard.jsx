import React from 'react'

const NoteCard = ({note, deleteNote, noteForUpdate}) => {
  return (
    <div className='w-[30%] border p-4 rounded-xl '>
      <h1>{note.title}</h1>
      <p className='text-xs'>{note.description.length > 20? note.description.substring(0,20) : note.description}</p>
        <div className='flex justify-between'>
            <button onClick={() => {noteForUpdate(note)} } className='p-2 bg-amber-400 rounded' >Update</button>
            <button onClick={()=> {deleteNote(note._id)}} className='p-2 bg-red-600 rounded' >Delete</button>
        </div>
    </div>
  )
}

export default NoteCard
