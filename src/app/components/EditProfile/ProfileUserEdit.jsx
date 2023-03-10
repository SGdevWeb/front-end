import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router";
import apiGateway from '../../api/backend/apiGateway';
import ButtonBis from "../Base/ButtonBis";
import { URL_BACK_UPDATE_USER } from "../../constants/urls/urlBackEnd";
import { UserCircleIcon } from "@heroicons/react/solid";


const ProfileUser = ({ firstname, lastname, username, email, work, date_birth, description }) => {
    const { uuid } = useParams();
    const [users, setUsers] = useState({
        newPassword: "",
        confirmPassword: "",
        oldPassword: "",
        firstname: firstname,
        lastname: lastname,
        date_birth: date_birth,
        email: email,
        work: work,
        description: description,
        username: username,
    });


    return (
        <Formik
            initialValues={{
                firstname: firstname,
                lastname: lastname,
                date_birth: date_birth,
                email: email,
                work: work,
                description: description,
                username: username,
                newPassword: "",
                confirmPassword: "",
                oldPassword: ""

            }}
            onSubmit={async (values, actions) => {
                const updatedValues = {
                    ...values,
                    uuid

                };
                await apiGateway.put(URL_BACK_UPDATE_USER, updatedValues).then((res) => {
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
                                value={username}
                                onChange={(e) => setUsers({ ...users, username: e.target.value })}
                            />
                            <Field
                                className="text-center border-2 border-gradient-v rounded-lg my-1 "
                                id="work"
                                name="work"
                                type="text"
                                value={work}
                                onChange={(e) => setUsers({ ...users, work: e.target.value })}
                            />
                            <ButtonBis className="mt-3" title="Editer ma photo" />
                        </div>
                        <div className="flex flex-col items-center w-3/4 ml-2">
                            <Field
                                className="border-2 border-gradient-v rounded-lg my-1 w-full h-full resize-none "
                                id="description"
                                name="description"
                                component="textarea"
                                value={description}
                                onChange={(e) => setUsers({ ...users, description: e.target.value })}
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
                            value={firstname} // affiche le prénom de l'utilisateur
                            className="input w-1/3"
                            onChange={(e) => setUsers({ ...users, firstname: e.target.value })}
                        />
                        <Field
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={lastname} // affiche le nom de l'utilisateur
                            className="input w-1/3"
                            onChange={(e) => setUsers({ ...users, lastname: e.target.value })}
                        />
                    </div>
                    <div className="flex mx-5 ">
                        <Field
                            type="date"
                            id="date_birth"
                            name="date_birth"
                            value={date_birth}
                            className="input mt-5 w-11/12"
                            onChange={(e) => setUsers({ ...users, date_birth: e.target.value })}
                        />
                    </div>
                    <div>
                        <h3 className=" mt-5 mx-5">Paramètre du profil</h3>
                    </div>
                    <div className="flex mx-5">
                        <Field
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            className="input flex mt-5 w-full "
                            onChange={(e) => setUsers({ ...users, email: e.target.value })}
                        />
                    </div>
                    <div className="flex mt-5 mx-5 justify-between">
                        <Field
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value="Nouveau mot de passe"
                            className="input w-1/3"
                            onChange={(e) => setUsers({ ...users, newPassword: e.target.value })}
                        />
                        <Field
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value="Confirmation mot de passe"
                            className="input w-1/3"
                            onChange={(e) => setUsers({ ...users, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className="flex mt-5 mx-5 ">
                        <Field
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value="Ancien mot de passe"
                            className="input w-full"
                            onChange={(e) => setUsers({ ...users, oldPassword: e.target.value })}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileUser;