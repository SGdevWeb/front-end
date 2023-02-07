
import React from 'react'
import './LoginCard.css'
import captcha from '../../../assets/img/icons/logos_recaptcha.svg'



function LoginCard() {
  return (
    <div className='bg-gray-300  w-2/3 flex flex-col justify-center items-center'>
      <h2>S'identifier</h2>
      <input className='input mb-4' type="email" placeholder='exemple@gmail.com'/>
      <input className='input mb-4' type="password" placeholder='Mot de passe' />
      <div className=' bg-gray-600 w-1/2 h-1/2 mb-4'>
        <h4></h4>
        <img src={captcha} alt='Icon-recapchat'></img>
      </div>
      
      
    </div>
  )
}

export default LoginCard
