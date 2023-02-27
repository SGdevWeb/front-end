import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-store/userProfileSlice";

const ProfileUser = () => {
    const [users, setUsers] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_verify: "",
        new_password: "",
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const response = await axios.get("http://localhost:8010/users/uuid");
                setUsers(response.data);
                dispatch(setUser(response.data)); // sauvegarde l'utilisateur dans le store Redux
            } catch (error) {
                console.log(error);
            }
        };
        getUserProfile();
    }, [dispatch]);

    return (
        <div>
            <h3 className=" mt-5 mx-5">Paramètres utilisateurs</h3>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    date_birth: "",
                }}
            >
                <Form >
                    <div className="justify-between flex mt-5 mx-5">

                        <Field
                            type="text"
                            name="firstname"
                            placeholder={users.firstname} // affiche le prénom de l'utilisateur
                            className="input w-1/3"
                        />
                        <Field
                            type="text"
                            name="lastname"
                            placeholder={users.lastname} // affiche le nom de l'utilisateur
                            className="input w-1/3"
                        />
                    </div>
                    <div className="flex mx-5 ">
                        <Field
                            type="date"
                            name="date_birth"
                            placeholder={users.date_birth} // affiche la date de naissance
                            className="input mt-5 w-11/12"
                        />
                    </div>
                    <div>
                        <h3 className=" mt-5 mx-5">Paramètre du profil</h3>
                    </div>
                    <div className="flex mx-5">
                    <Field
                        type="text"
                        name="email"
                        placeholder={users.email} // affiche l'email de l'utilisateur
                        className="input flex mt-5 w-full "
                    />
                    </div>
                    <div className="flex mt-5 mx-5 justify-between">
                    <Field
                        type="password"
                        name="password"
                        placeholder={users.password} // affiche l'email de l'utilisateur
                        className="input w-1/3"
                    />
                    <Field
                        type="password"
                        name="password_verify"
                        placeholder={users.password_verify} // affiche l'email de l'utilisateur
                        className="input w-1/3"
                    />
                    </div>
                    <div className="flex mt-5 mx-5 ">
                    <Field
                        type="password"
                        name="new_password"
                        placeholder={users.new_password} // affiche l'email de l'utilisateur
                        className="input w-full"
                    />
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ProfileUser;