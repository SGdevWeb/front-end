import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-store/userProfileSlice";
import ButtonBis from "../Base/ButtonBis";
import { Link } from "react-router-dom";
import { URL_BACK_UPDATE_DESCRIPTION, URL_BACK_UPDATE_EXPERIENCE } from "../../constants/urls/urlBackEnd";
import { UserCircleIcon } from "@heroicons/react/solid";
import * as Yup from 'Yup';

const ProfileUser = () => {
    const formShema = Yup.object().shape({
        username: Yup.string().min(3).required('required'),
        job: Yup.string().min(3).required('required'),
        description: Yup.string().min(3).required('required')
    })
    const [users, setUsers] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_verify: "",
        new_password: "",
        username: "",
        job: "",
        description: "",
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
        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                date_birth: "",
                email: "",
                job: "",
                description: "",
                date_birth: "",

            }}
            onSubmit={async (values, actions) => {
                await apiGateway.post(URL_BACK_UPDATE_EXPERIENCE, values).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    if (err) {
                        alert("erreur server")
                    }
                    console.log(err);
                });
            }}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <div className="flex p-5">
                        <div className="flex flex-col w-1/4 ">
                            <UserCircleIcon />
                            <Field
                                className="text-center border-2 border-gradient-v rounded-lg my-1 "
                                id="username"
                                name="username"
                                type="text"
                            />
                            <Field
                                className="text-center border-2 border-gradient-v rounded-lg my-1 "
                                id="job"
                                name="job"
                                type="text"
                            />
                            <ButtonBis className="mt-3" title="Editer ma photo" />
                        </div>
                        <div className="flex flex-col items-center w-3/4 ml-2">
                            <Field
                                className="border-2 border-gradient-v rounded-lg my-1 w-full h-full resize-none "
                                id="description"
                                name="description"
                                component="textarea"
                            />
                            <ButtonBis
                                className="mt-2"
                                title="Sauvegarder les modification"
                                type="submit"
                            />
                        </div>
                    </div>

                    <h3 className=" mt-5 mx-5">Paramètres utilisateurs</h3>
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
            )}
        </Formik>
    );
};

export default ProfileUser;