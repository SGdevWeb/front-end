import * as Yup from 'yup';

export default Yup.object({
    name : Yup.string().min(3,'3 caractère minimum').max(30).required('nécessaires').trim('ne peut contenir que des espaces'),
    date_start : Yup.date().required('nécessaires').max(new Date(), "la date de début est superieure a la date d'aujourd'hui"),
    date_end : Yup.date().when('date_start',(date_start, schema) => (date_start && schema.min(date_start,"la date de fin doit etre superieur à la date de début"))),
    place : Yup.string().min(3,'3 caractère minimum').required('nécessaires').trim('ne peut contenir que des espaces'),
    description : Yup.string().min(3,'3 caractère minimum').required('nécessaires').trim('ne peut contenir que des espaces'),
})  