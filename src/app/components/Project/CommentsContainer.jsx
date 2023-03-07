import React, { useEffect, useRef, useState } from 'react'
import Comments from './Comments'
import NewComment from './NewComment';
import { getAllComments } from '../../api/backend/comment';

function CommentsContainer() {

  const [comments, setComments] = useState([])
  
  useEffect(() => {
    getAllComments()
      .then( response => {
        const comments = response.data
/* Logging the comments to the console. */
        // console.log(comments)
        setComments(comments)
      })
      .catch(error => console.log(error))
  }, [])

  const addComment = () => {
    // const newComment = comment
    // setComments([...comments, newComment])
    getAllComments()
      .then(response => {
        const comments = response.data
        setComments(comments)
      })
      .catch(error => console.log(error))
  }

  const update = () => {
    getAllComments()
      .then(response => {
        const comments = response.data
        setComments(comments)
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
        <h2 className='text-2xl mb-3'><span className='border-b-2 border-black'>COMMENTAIRES</span></h2>
        {/* {isLogged &&  */}
        <NewComment
          addComment={addComment}
        />
        {/* } */}
        <Comments
          comments = {comments}
          update= {update}
        />
    </div>
  )
}

export default CommentsContainer