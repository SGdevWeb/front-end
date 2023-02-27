import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-store/userProfileSlice";

const ProfileUser = () => {
  const [users, setUsers] = useState({});
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
      <h3>Paramètre utilisateur</h3>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          date_birth: "",
        }}
      >
        <div className="flex-row flex">
          <Form className="w-1/3">
            <Field
              type="text"
              name="firstname"
              placeholder={users.firstname} // affiche le prénom de l'utilisateur
              className="input"
            />

            <Field
              type="text"
              name="lastname"
              placeholder={users.lastname} // affiche le nom de l'utilisateur
              className="input"
            />

            <Field
              type="text"
              name="email"
              placeholder={users.email} // affiche l'email de l'utilisateur
              className="input"
            />
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default ProfileUser;