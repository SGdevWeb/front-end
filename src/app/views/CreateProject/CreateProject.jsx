import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Base/ButtonBis";
import InputBis from "../../components/base/InputBis";
import Select from "../../components/base/Select";
import TextArea from "../../components/base/TextArea";
import apiGateway from "../../api/backend/apiGateway";
import typesProject from "../../fakeData/TypeData";
import { useFormik } from "formik";
import validationSchema from "../../utils/createProjectSchema";

export default function CreateProject({ isEditMode }) {
  const navigate = useNavigate();

  const [error, setError] = useState();

  const { uuid } = useParams();

  useEffect(() => {
    if (isEditMode) {
      apiGateway
        .get("/project/" + uuid)
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
  }, []);

  const initialValues = {
    name: "",
    date_start: "",
    date_end: "",
    description: "",
  };

  const onSubmit = async (formValues) => {
    try {
      if (formValues.date_end === "") delete formValues.date_end;
      delete formValues.type;
      const response = isEditMode
        ? await apiGateway.put(`/project/update/${uuid}`, formValues)
        : await apiGateway.post("/project/create/", formValues);
      resetForm();
      navigate("/project/" + response.data.uuid);
    } catch (error) {
      setError(error.message);
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
    <form className="p-3 bg-gray-1" onSubmit={handleSubmit}>
      <div className="flex justify-between my-3 pt-3">
        <div className="flex flex-col gap-1">
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
      <TextArea
        placeholder={isEditMode ? values.description : "Description du projet"}
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
        disabled={!isValid || isSubmitting}
        className="flex mx-auto mt-3"
        title={isEditMode ? "Modifier le projet" : "Créer le projet"}
      />
    </form>
  );
}
