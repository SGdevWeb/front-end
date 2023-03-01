import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllComments, updateComment } from '../../api/backend/comment'
import TextArea from '../base/TextArea'

function UpdateComment({comment, user, isLogged, setIsUpdate, update}) {

    const commentValue = comment.comment
    const [textareaValue, setTextareaValue] = useState(commentValue)
    const [error, setError] = useState(false)

    const idProject = useParams().id

    function handleSubmit() {
        console.log(textareaValue)
        if (!textareaValue) {
            return setError(true)
        } else {
            setError(false)
        }
        setIsUpdate(false)
        const updatedComment = {
            comment: textareaValue,
            uuid: comment.uuid
        }
        updateComment(updatedComment)
            .then(response => {
                console.log(response)
                update()
            })
            .catch(error => console.log(error))
    }

  return (
    <div className='flex border-2 border-gradient-v rounded-lg pl-4 py-2 mb-2'>
        <div className='w-full'>
            <div className='flex'>
                <div className='flex items-center w-8 h-8 mr-2'>
                    {isLogged ? (
                        <img className='w-full rounded-full' src={user.avatar} alt="avatar" />
                    ) : (
                        <div>AV</div>
                    )}
                </div>
                <div className='flex items-center'>
                    {isLogged ? (
                        <div className='font-semibold'>{user.username}</div>
                    ) : (
                        <div>+USERNAME</div>
                    )}
                </div>
            </div>
            <div className='mt-2'>
                <TextArea
                    value={textareaValue}
                    className='w-full'
                    onChange={(e) => setTextareaValue(e.target.value)}
                />
            </div>
            {
                error &&
                <p className='text-red-600 text-base mt-1'>Message vide !</p>
            }
        </div>
        <div className='flex items-center'>
            <button 
                className='flex items-end cursor-pointer'
                type='submit'
                onClick={handleSubmit}
            >
                <span className='text-2xl font-bold text- text-transparent bg-clip-text gradient m-2'>{'>'}</span>
            </button>
        </div>
    </div>
  )
}

export default UpdateComment