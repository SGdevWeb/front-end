import React from 'react'
import captcha from '../../assets/img/icons/logos_recaptcha.svg'

function Captcha() {
  return (
    <div className='w-full sm:w-4/5 h-24 bg-white mt-4 mb-8 flex flex-row justify-center items-center rounded-lg'>
        <input type="checkbox" />
        <p className='ml-2 mr-4'>Je ne suis pas un robot</p>
        <img src={captcha} alt='Icon-recapchat'></img>
    </div>
  )
}

export default Captcha