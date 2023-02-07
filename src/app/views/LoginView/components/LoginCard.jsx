import React from 'react'
// import './LoginCard.css'
import captcha from '../../../assets/img/icons/logos_recaptcha.svg'

function LoginCard() {
  return (
    <div className='bg-gray-300 w-2/3 flex flex-col justify-center items-center'>
        <h2>S'identifier</h2>
        <input className='input mb-5' type="email" placeholder='exemple@gmail.com' />
        <input className='input mb-5' type="password" placeholder='Mot de passe' />
        <div>
            <h4></h4>
            <img src={captcha}/>
        </div>
    </div>
  )
}

export default LoginCard