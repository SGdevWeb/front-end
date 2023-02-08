import React from 'react'
import './LoginCard.css'
import captcha from '../../../assets/img/icons/logos_recaptcha.svg'
import { Link } from 'react-router-dom'
import Button from '../../../components/theme/Button'



function LoginCard() {
  return (
    <div className='bg-gray-1 w-3/5 rounded-lg flex flex-col justify-center items-center'>
      <h2 className='my-8'>S'identifier</h2>
      <div className='w-full flex flex-col items-center'>
        <input className='input mb-1' type="email" placeholder='exemple@gmail.com'/>
        <small className='mb-4'>Adresse mail enregistrée lors de l'inscription</small>
      </div>
      <div className='w-full flex flex-col items-center'>
        <input className='input mb-1' type="password" placeholder='Mot de passe' />
        <small className='mb-4'>Vous avez oublié votre mot de passe</small>
      </div>
      <div className='w-2/5 h-24 bg-white mt-4 mb-8 flex flex-row justify-center items-center rounded-lg'>
        <input type="checkbox" />
        <p className='ml-2 mr-4'>Je ne suis pas un robot</p>
        <img src={captcha} alt='Icon-recapchat'></img>
      </div>
      <Button 
        title='CONNEXION'
        width='72'
      />
      <div className='mb-4 w-full flex justify-end'>
        <Link className='mr-4' to='/'>Créer un compte</Link>
      </div>
    </div>
  )
}

export default LoginCard
