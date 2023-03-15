import * as Yup from 'yup';

export default Yup.object({
    name : Yup.string().min(3).max(30).required('nécessaires'),
    description : Yup.string().min(3).required('nécessaires')
})