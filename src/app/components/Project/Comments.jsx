import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Comment from './Comment'
import UpdateComment from './UpdateComment'

function Comments({comments, update}) {
  
  return ( 
    <>
    {comments && comments.map( comment => (
      <Comment
        key={comment._id}
        comment={comment}
        update={update}
      />
    ))}
    </>
  )
}

export default Comments

