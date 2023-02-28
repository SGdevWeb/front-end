import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLogged, selectUser } from '../../redux-store/authenticationSlice'

function Comment({comments}) {

  console.log(comments)
  const isLogged = useSelector(selectIsLogged)
  const user = useSelector(selectUser)
  
  return (
    <>
    {comments && comments.map( comment => (
      <div key={comment._id}>
        <div className='flex border-2 border-gradient-v rounded-lg p-2 mb-2'>
          <div className='w-full'>
            <div>avatar + username</div>
            <div>{comment.comment}</div>
          </div>
          {isLogged && user != null && comment.uuid_user === user.userId && 
            <div className='flex flex-row'>
              <div className='flex items-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </div>
              <div className='flex items-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
            </div>
          }
        </div>
      </div>
    ))}
    </>
  )
}

export default Comment