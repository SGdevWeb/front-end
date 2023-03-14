import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "../Base/Button";
import { Link } from "react-router-dom";
import { URL_EDITPROFILE } from "../../constants/urls/urlFrontEnd";
import { UserCircleIcon } from "@heroicons/react/solid";

const ProfileUser = ({ firstname, lastname, username, email, work, date_birth, description,uuid_user }) => {
  return (
    <Formik
      initialValues={{
        firstname: firstname,
        lastname: lastname,
        date_birth: date_birth,
        email: email,
        description: description,
        username: username,
        work: work,
      }}
    >
      <div>
        <div className="flex p-5">
          <div className="flex flex-col w-1/4">
            <UserCircleIcon />
            <p className="text-center">{username}</p>
            <p className="text-center mt-1">{work}</p>
            <Link to={`/editprofile/${uuid_user}`}>
              <Button className="mt-3" title="Editer mon profil" />
            </Link>
          </div>
          <div className="border-2 border-red-500 flex flex-col ml-5 rounded-md pb-5 w-11/12">
            <p className="pt-5">{description}</p>
          </div>
        </div>
        <h3 className=" mt-5 mx-5">Paramètres utilisateurs</h3>

        <Form >
          <div className="justify-between flex mt-5 mx-5">

            <Field
              type="text"
              name="firstname"
              placeholder={firstname}
              className="input w-1/3"
              disabled
            />
            <Field
              type="text"
              name="lastname"
              placeholder={lastname}
              className="input w-1/3"
              disabled
            />
          </div>
          <div className="flex mx-5 ">
              <input
                type="text"
                name="date_birth"
                value={date_birth ? date_birth : "date non renseigné"}
                className="input flex mt-5 w-full"
                disabled
              />
          </div>
          <div>
            <h3 className=" mt-5 mx-5">Paramètre du profil</h3>
          </div>
          <div className="flex mx-5">
            <Field
              type="text"
              name="email"
              placeholder={email}
              className="input flex mt-5 w-full "
              disabled
            />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ProfileUser;