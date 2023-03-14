import * as Yup from 'yup';

export default Yup.object().shape({
    firstname: Yup.string().test('same-firstname', 'firstname is too short', function (value) {
        if (value === this.parent.firstname) {
            return true; // la valeur n'a pas été modifiée
        } else {
            return value.length >= 3; // la valeur a été modifiée, vérifie la longueur
        }
    })
        .notRequired()
        .min(3, "Le prénom doit comporter au moins 2 caractères.")
    ,
    username: Yup.string().test('same-username', 'Username is too short', function (value) {
        if (value === this.parent.username) {
            return true;
        } else {
            return value.length >= 3; 
        }
    })
        .notRequired()
        .matches(/^[a-zA-Z0-9_]*$/,
            "Le nom d'utilisateur ne doit contenir que des lettres, des chiffres et des traits de soulignement.")
        .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères.")
    ,
    lastname: Yup.string().test('same-lastname', 'Lastname is too short', function (value) {
        if (value === this.parent.Lastname) {
            return true; 
        } else {
            return value.length >= 3; 
        }
    })
        .notRequired()
        .matches(/^[a-zA-Z0-9_]*$/, "Le nom d'utilisateur ne doit contenir que des lettres, des chiffres et des traits de soulignement.")
        .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères.")
    ,
    email: Yup.string().test('same-email', 'email is too short', function (value) {
        if (value === this.parent.Lastname) {
            return true; 
        } else {
            return value.length >= 3; 
        }
    })
        .notRequired()
        .email("Email non valide")
    ,
    oldPassword: Yup.string().test('same-oldPassword', function (value) {
        if (value === this.parent.oldPassword) {
            return true; 
        } else {
            return value; 
        }
    })
        .notRequired()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
    ,
    newPassword: Yup.string()
        .notRequired()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
    ,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .notRequired()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
});