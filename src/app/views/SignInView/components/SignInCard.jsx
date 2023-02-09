import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/theme/Button'
import Input from '../../../components/theme/Input'
import Captcha from '../../../components/theme/Captcha'
import { useFormik } from 'formik'
import { register } from '../../../utils/fakeApi'
import validationSchema from '../../../utils/validationSchema'

/*
Un message d'erreur apparaît lorsque l'utilisateur change de champ
Un message d'erreur apparaît lorsque l'utilisateur renseigne une adresse mail déjà utilisé
L'utilisateur ne peut pas valider le formulaire si il a commencé à remplir un champ et si tout les champs ne sont pas remplis : il ne peut pas cliquer sur le bouton de soumission
La fakeApi et le schema de validation du formulaire se trouve dans le dossier utils
Le composant est responsive
*/

function SignInCard() {

  const initialValues = {
    email: '',
    lastname: '',
    firstname: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  };
    
  const { 
    values, handleChange, handleBlur,
    isSubmitting, isValid, touched, 
    handleSubmit, setFieldError,
    resetForm, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });
    
  async function onSubmit (formValues){
    console.log(formValues)
    try {
        await register(formValues);
        resetForm();
        alert("Inscription effectuée avec succès :)")
    } catch ({ errors }) {
        for(let key in errors) {
            setFieldError(key, errors[key]);
        }
    }
  }
    
  return (
    <div className='bg-gray-100 w-full max-w-2xl md:w-4/5 lg:w-4/5 2xl:max-w-3xl rounded-lg flex flex-col  items-center'>
      <form onSubmit={handleSubmit} className='p-2 bg-transparent w-full sm:w-4/5 md:w-4/5 lg:w-4/5 2xl:w-4/5 m-2 rounded-lg flex flex-col justify-center items-center'>
        <h2 className='my-8 text-2xl sm:text-3xl lg:text-4xl'>Inscription</h2>
        <Input
          type='email'
          placeholder='exemple@gmail.com'
          description="Adresse mail enregistrée lors de l'inscription"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.email && errors.email && 
          <small className="error">{ errors.email }</small>
        }
        <Input
          type='text'
          placeholder='Nom'
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.lastname && errors.lastname && 
          <small className="error">{ errors.lastname }</small>
        }
        <Input
          type='text'
          placeholder='Prénom'
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.firstname && errors.firstname && 
          <small className="error">{ errors.firstname }</small>
        }
        <Input
          type='text'
          placeholder="Nom d'utilisateur"
          description="Votre identité auprès des membres de Tree-up"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.username && errors.username && 
          <small className="error">{ errors.username }</small>
        }
        <Input
          type='password'
          placeholder='********'
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.password && errors.password && 
          <small className="error">{ errors.password }</small>
        }
        <Input
          type='password'
          placeholder='********'
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.passwordConfirmation && errors.passwordConfirmation && 
          <small className="error">{ errors.passwordConfirmation }</small>
        }
        <Captcha />
        <Button
          className='w-full sm:w-4/5' 
          title="S'INSCRIRE"
          type="submit"
          disabled={isSubmitting || ! isValid}
        />
      </form>
      <div className='mb-4 w-full flex justify-end'>
        <Link className='mr-4 mt-4' to='/'>Vous avez déjà un compte ?</Link>
      </div>
    </div>
  )
}

export default SignInCard