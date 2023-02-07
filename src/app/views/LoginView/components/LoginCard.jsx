
import React from 'react'
import './LoginCard.css'
import captcha from '../../../assets/img/icons/logos_recaptcha.svg'
import { Link } from 'react-router-dom'



function LoginCard() {
  return (
    <div className='bg-gray-300 rounded-lg w-2/3 flex flex-col justify-center items-center'>
      <h2 className='my-8'>S'identifier</h2>
      <input className='input mb-1' type="email" placeholder='exemple@gmail.com'/>
      <small className='w-full ml-52 mb-4 text-left'>Adresse mail enregistrée lors de l'inscription</small>
      <input className='input mb-1' type="password" placeholder='Mot de passe' />
      <small className='w-full ml-52 mb-4 text-left'>Vous avez oublié votre mot de passe</small>
      <div className='w-1/2 bg-gray-600 mt-4 mb-8'>
        <h4></h4>
        <img src={captcha} alt='Icon-recapchat'></img>
      </div>
      <button className='px-2 py-4 mb-8 w-1/3 btn btn-hover btn-test'>CONNEXION</button>
      <div className='mb-4 w-full flex justify-end'>
        <Link className='mr-4' to='/'>Créer un compte</Link>
      </div>
    </div>
  )
}

export default LoginCard
