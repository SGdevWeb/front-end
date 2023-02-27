import React, { useEffect, useRef, useState } from 'react'
import Comment from './Comment'
import NewComment from './NewComment';
import { getAllComments } from '../../api/backend/comment';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../redux-store/authenticationSlice';


function Comments() {

  const [comments, setComments] = useState([])
  const isLogged = useSelector(selectIsLogged)
  
  useEffect(() => {
    getAllComments()
    .then( response => {setComments(response.data.comments)} )
    .catch(error => console.log(error))
}, [])

  const addComment = () => {
    // const newComment = comment
    // setComments([...comments, newComment])
    getAllComments()
      .then(response => {
        const comments = response.data.comments
        setComments(comments)
      })
  }

  return (
    <div>
        <h2 className='text-2xl mb-3'><span className='border-b-2 border-black'>COMMENTAIRES</span></h2>
        {isLogged && 
        <NewComment
          addComment={addComment}
        />
        }
        <Comment 
          comments = {comments}
        />
    </div>
  )
}

export default Comments