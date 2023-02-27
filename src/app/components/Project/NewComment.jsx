import React, { useState } from 'react'

import { commentPost } from '../../api/backend/comment'


function NewComment({addComment, uuid_user}) {
        
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)

    // const userUuid = useSelector(selectUser())
    // console.log(userUuid)
    // console.log(useSelector(state => console.log(state)))
    // const userUuid = useSelector(selectUser())

    function handleChange(e) {
        const value = e.target.value
        setInputValue(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const value = inputValue
        if (!value) {
            return setError(true)
        } else {
            setError(false)
        }
        const newComment = {
            comment: value,
            uuid_user: uuid_user
        }
        commentPost(newComment)
            .then(() => {
                console.log('commentaire enregistré')
                addComment()
            })
            .catch((error) => console.log(error))
        setInputValue('')
        console.log('fin submit')
    }

    function updateTextAreaHeight(e) {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight+'px'
    }

    return (
        <>
            <form className='flex justify-between border-2 border-gradient-v rounded-lg mb-3'>
                <textarea 
                    onInput={updateTextAreaHeight}
                    style={{ resize: "none" }}
                    className='w-full border-none rounded-lg focus:outline-none focus:ring-0' 
                    type="text" 
                    placeholder='Ecrire un message ...'
                    onChange={handleChange}
                    value={inputValue}
                />
                <button 
                    className='flex items-end cursor-pointer'
                    type='submit'
                    onClick={handleSubmit}
                >
                    <span className='text-2xl font-bold text- text-transparent bg-clip-text gradient mr-1'>{'>'}</span>
                </button>
            </form>
            {
                error &&
                <p className='text-red-600 text-base'>Message vide !</p>
            }
        </>
    )
}

export default NewComment
