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
    date_birth: "",
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
        }}
      >
          <Form className="block ">
            <h3>Paramètres utilisateurs</h3>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
            <Field
              type="text"
              name="firstname"
              placeholder={users.firstname} // affiche le prénom de l'utilisateur
              className="input mt-5 "
            />

            <Field
              type="text"
              name="lastname"
              placeholder={users.lastname} // affiche le nom de l'utilisateur
              className="input mt-5"
            />
            </div>
            <div className="grid justify-items-center mt-5" >
            <Field
              type="date"
              name="date-birth"
              placeholder={users.date_birth} // affiche la date de naissance de l'utilisateur
              className="input w-4/5"
            />   
            </div>
            <div className=" grid justify-items-center mt-5  ">
            <h3>Parametre profile</h3>
              <Field
              type="text"
              name="email"
              placeholder={users.email} // affiche l'email de l'utilisateur
              className="input mt-5  "
            />  
            </div> 

          </Form>
</Formik>
  );
};

export default ProfileUser;