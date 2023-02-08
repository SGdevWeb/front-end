import React from 'react'

function Button({title, width}) {
    return (
      <div className='flex'>
          <div className='p-1 btn-border rounded-lg'>
              <button className={`btn btn-hover w-${width}`}>{title}</button>
          </div>
      </div>
    )
  }

export default Button