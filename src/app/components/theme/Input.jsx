import React from 'react'

function Input() {
  return (
    <div className='w-full flex flex-col items-center'>
    <div className='p-0.5 btn-border rounded-lg w-full'>
      <input className='w-full input' type="email" placeholder='exemple@gmail.com'/>
    </div>
  </div>
  )
}

export default Input