import React from 'react'
import CommentsContainer from '../../components/Project/CommentsContainer'

function Project() {
  return (
    <>
      <div className='border-solid border-2 border-slate-200 mb-1'>Image</div>
      <div className='border-solid border-2 border-slate-200 mb-1'>Intro</div>
      <div className='border-solid border-2 border-slate-200 mb-1'>Collaborateurs</div>
      <div className='border-solid border-2 border-slate-200 mb-1'>Description du projet</div>
      <div className='border-solid border-2 border-slate-200 mb-1'>Contactez-nous</div>
      <CommentsContainer />
    </>
  )
}

export default Project