import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
import { getAllComments } from '../../api/backend/comment';
import axios from 'axios';

function Comments() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8020/comments')
      .then( response => setComments(response.data.comments) )
  }, [])

  return (
    <div>
        <h2 className='text-2xl mb-3'><span className='border-b-2 border-black'>COMMENTAIRES</span></h2>
        <AddComment />
        <Comment 
          comments = {comments}
        />
    </div>
  )
}

export default Comments