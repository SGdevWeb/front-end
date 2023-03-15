import * as Yup from 'yup';

export default Yup.object({
    name : Yup.string().min(3).max(30).required('nécessaires'),
    date_start : Yup.date().required('nécessaires'),
    date_end : Yup.date().when('date_start',(date_start, schema) => (date_start && schema.min(date_start,"la date de fin doit etre superieur à la date de début"))),
    place : Yup.string().min(3).required('nécessaires'),
    description : Yup.string().min(3).required('nécessaires'),
})  