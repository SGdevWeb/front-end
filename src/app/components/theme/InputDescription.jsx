import React from 'react'

function InputDescription({type, placeholder, description, name, value, onChange, onBlur}) {
  return (
    <div className='w-full flex flex-col items-center'>
    <div className='p-0.5 btn-border rounded-lg w-full'>
      <input 
        className='w-full input' type={type} placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
    
    <small className='w-full mt-1 mb-4'>{description}</small>
    
  </div>
  )
}

export default InputDescription