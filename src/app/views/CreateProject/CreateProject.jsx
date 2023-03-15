import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Base/ButtonBis";
import CollaboratorCard from "../../components/Project/CollaboratorCard";
import InputBis from "../../components/base/InputBis";
import { ModalAdd } from "../../components/Project/ModalAdd";
import OwnerCard from "../../components/Project/OwnerCard";
import TextArea from "../../components/base/TextArea";
import apiGateway from "../../api/backend/apiGateway";
import { getToken } from "../../services/tokenServices";
import { selectUser } from "../../redux-store/authenticationSlice";
import { useFormik } from "formik";
import validationSchema from "../../utils/createProjectSchema";

export default function CreateProject({ isEditMode }) {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { uuid } = useParams();
  const token = getToken();
  const [showModal, setShowModal] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [collaborators, setCollaborators] = useState([]);
  const [existingCollaborators, setExistingCollaborators] = useState([]);
  const [isCollaboratorsLoaded, setIsCollaboratorsLoaded] = useState(false);
  const [ownersids, setOwnersids] = useState([]);
  const [owners, setOwners] = useState([]);
  console.log('owners',owners);
  console.log('collaborators',collaborators[0]);
  console.log('ownresid',ownersids);

  //para adjuntar solo id nuevos al array
  const handleModalClose = (selectedUsersModal) => {
    const selectedUserIds = [...selectedUsers];
    selectedUsersModal.forEach((user) => {
      if (!selectedUserIds.includes(user)) {
        selectedUserIds.push(user);
      }
    });
    setSelectedUsers(selectedUserIds);
  };
  //para eliminar desde la x
  const handleDeleteCollaborator = (index) => {
    const newSelectedUsers = selectedUsers.filter((item, i) => i !== index);
    setSelectedUsers(newSelectedUsers);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // Aqui recuperamos la informacion personal de los ids
    const fetchCollaborators = async () => {
      if (selectedUsers.length > 0) {
        const promises = selectedUsers.map(async (userId) => {
          const response = await apiGateway.get(`/users/${userId}`, config);
          return response.data;
        });
        const users = await Promise.all(promises);
        setCollaborators(users);
      } else {
        setCollaborators([]);
      }
    };
    fetchCollaborators();

    const fetchOwners = async () => {
      if (ownersids.length > 0) {
        const promises = ownersids.map(async (userId) => {
          const response = await apiGateway.get(`/users/${userId}`, config);
          return response.data;
        });
        const users = await Promise.all(promises);
        setOwners(users);
      } else {
        setOwners([]);
      }
    };
    fetchOwners();

    //recuperar los colaboradores existentes
    const fetchExistingCollaborators = async () => {
      const response = await apiGateway.get(`/collaborators/project/${uuid}`);
      console.log(response.data);
      if (response.data) {
        const { collaborators } = response.data;
        const { owners } = response.data;
        const existingCollaborators = Object.values(collaborators);
        console.log("algunos", existingCollaborators);
        setExistingCollaborators(existingCollaborators);
        setSelectedUsers(existingCollaborators);
        setOwnersids(owners);
        setIsCollaboratorsLoaded(true);
      }
    };

    if (isEditMode) {
      //cuando editamos llamamos a los  colaboradores existentes
      if (!isCollaboratorsLoaded) {
        // Solo si los colaboradores aún no se han cargado
        fetchExistingCollaborators();
      }
      apiGateway
        .get("/project/" + uuid, config)
        .then(({ data: { name, date_start, date_end, description } }) => {
          const dateStart = date_start.slice(0, date_start.indexOf("T"));
          const dateEnd = date_end
            ? date_end.slice(0, date_end.indexOf("T"))
            : "";
          setValues({
            name,
            date_start: dateStart,
            date_end: dateEnd,
            description,
          });
        });
    }
  }, [selectedUsers, isEditMode, uuid, setExistingCollaborators]); //modif dave

  const initialValues = {
    name: "",
    date_start: "",
    date_end: "",
    description: "",
  };

  const onSubmit = async (formValues) => {
    try {
      if (formValues.date_end === "") delete formValues.date_end;
      if (new Date(formValues.date_end) < new Date(formValues.date_start))
        throw new Error(
          "Il est important de veiller à ce que la date de début du projet soit antérieure à la date de fin."
        );
      if (Date.now() < new Date(formValues.date_start))
        throw new Error(
          "Il est essentiel que la date de début du projet soit antérieure a la date d'aujourd'hui."
        );
      let response;
      if (isEditMode) {
        response = await apiGateway.put(
          `/project/update/${uuid}`,
          formValues,
          config
        );
        if (true) {
          const allCollaborators = [...existingCollaborators, ...selectedUsers];
          console.log("all", allCollaborators);
          const body = {
            project_uuid: response.data.uuid,
            collaborators: selectedUsers,
          };
          console.log(body);
          await apiGateway.post("/collaborators/update/", body);
        }
      } else {
        response = await apiGateway.post(
          "/project/create/",
          formValues,
          config
        );
        const body = {
          project_uuid: response.data.uuid,
          collaborators: selectedUsers,
        };
        await apiGateway.post("/collaborators/add/", body);
      }
      resetForm();
      navigate("/project/" + response.data.uuid);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const {
    handleSubmit,
    values,
    setValues,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    resetForm,
    errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Fragment>
      <form className="p-3 bg-gray-1" onSubmit={handleSubmit}>
        <div className="flex justify-between my-3 pt-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nom du projet</label>
            <InputBis
              type="text"
              placeholder={isEditMode ? values.name : "Nom du projet"}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <small className="error">{errors.name}</small>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date_start">Date de début</label>
            <InputBis
              type="date"
              name="date_start"
              value={values.date_start}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.date_start && errors.date_start && (
              <small className="error">{errors.date_start}</small>
            )}
            <label htmlFor="date_end">Date de fin</label>
            <InputBis
              type="date"
              name="date_end"
              value={values.date_end}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.date_end && errors.date_end && (
              <small className="error">{errors.date_end}</small>
            )}
          </div>
        </div>
        <button
          type="button"
          className="w-full sm:w-3/5 md:w-3/5 lg:w-2/6 my-3 border-gradient-v border-4 rounded-lg text-primary hover:text-white px-3 py-2"
          title="Ajouter des collaborateurs"
          onClick={() => setShowModal(true)}
        >
          Ajouter des collaborateurs
        </button>

        {selectedUsers.length > 0 && (
          <div className="overflow-x-auto flex">
            {owners.map((item, index) => (
              <OwnerCard
                key={item.user.uuid}
                firstname={item.user.firstname}
                username={item.user.username}
                
                descripcion={item.user.profile.descripcion}
              />
            ))}

            {collaborators.map((item, index) => (
              <CollaboratorCard
                key={item.user.uuid}
                firstname={item.user.firstname}
                username={item.user.username}
                onDelete={() => handleDeleteCollaborator(index)}
                descripcion={item.user.profile.descripcion}
              />
            ))}
          </div>
        )}

        <TextArea
          placeholder={
            isEditMode ? values.description : "Description du projet"
          }
          className="w-full"
          rows={"10"}
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.description && errors.description && (
          <small className="error">{errors.description}</small>
        )}
        {error && (
          <p className="error p-5 m-1 border-2 border-red-700 bg-white">
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex mx-auto mt-3"
          title={isEditMode ? "Modifier le projet" : "Créer le projet"}
        />
      </form>
      <ModalAdd
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onClose1={handleModalClose}
      ></ModalAdd>
    </Fragment>
  );
}
