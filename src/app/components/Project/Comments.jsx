import React from 'react'
import Comment from './Comment'
import AddComment from './AddComment'

function Comments() {
  return (
    <div>
        <h2 className='text-2xl mb-3'><span className='border-b-2 border-black'>COMMENTAIRES</span></h2>
        <AddComment />
        <Comment />
    </div>
  )
}

export default Comments