import * as Yup from 'yup';

import { PROJECT_NAME } from '../constants/regex';

export default Yup.object({
    name: Yup.string().required('Le champ name est requis.').matches(PROJECT_NAME, 'Veuillez saisir un nom de projet valide.'),
    date_start: Yup.date().required('Le champ date de debut est requis.'),
    date_end: Yup.date(),
    description: Yup.string().required('Le champ description est requis.').max(5000, 'La description ne doit pas dépasser 5000 caractères.'),
});