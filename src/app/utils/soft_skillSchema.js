import * as Yup from 'yup';

export default Yup.object({
    name : Yup.string().min(3).max(30).required('required'),
    description : Yup.string().min(3).required('required')
})