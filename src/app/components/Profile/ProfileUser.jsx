import React from "react";
import { Field, Form, Formik } from "formik";

const ProfileUser = ({ firstname, lastname }) => {
    return (
        <div>
            <h3>Paramètre utilisateur</h3>

            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    date_birth: "",
                }}
            >
                <div className="flex-row flex ">
                    <Form className="w-1/3">
                        <Field
                            type="text"
                            name="firstname"
                            placeholder={firstname}
                            className="input"
                        />

                        <Field
                            type="text"
                            name="lastname"
                            placeholder={lastname}
                            className="input"
                        />
                    </Form>
                </div>
            </Formik >
        </div >
    );
};

export default ProfileUser