import React, { useState } from "react";

import Button from "../../components/Base/ButtonBis";
import InputBis from "../../components/base/InputBis";
import Select from "../../components/base/Select";
import TextArea from "../../components/base/TextArea";
import apiGateway from "../../api/backend/apiGateway";
import typesProject from "../../fakeData/TypeData";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import validationSchema from "../../utils/createProjectSchema";

export default function CreateProject() {
	const navigate = useNavigate();

	const [error, setError] = useState();

	const initialValues = {
		name: "",
		date_start: "",
		date_end: "",
		type: "",
		description: "",
	};

	const onSubmit = async (formValues) => {
		try {
			if (formValues.date_end === "") delete formValues.date_end;
			if (new Date(formValues.date_end) < new Date(formValues.date_start)) 
        throw new Error("Il est important de veiller à ce que la date de début du projet soit antérieure à la date de fin.");
			if (Date.now() < new Date(formValues.date_start)) 
        throw new Error("Il est essentiel que la date de début du projet soit antérieure a la date d'aujourd'hui.");
			const response = await apiGateway.post("/project/create/", formValues);
			resetForm();
			navigate("/project/" + response.data.uuid);
		} catch (error) {
			setError(error.response ? error.response.data.message : error.message);
		}
	};

	const { handleSubmit, values, touched, isValid, isSubmitting, handleChange, handleBlur, resetForm, errors } = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<form className="p-3 bg-gray-1" onSubmit={handleSubmit}>
			<img className="rounded-xl justify-center items-center" src={"https://dummyimage.com/1200x300.png/5fa2dd/ffffff"} alt="Projet" loading="lazy" />
			<Button className="mt-3" title="Ajouter une image" />
			<div className="flex justify-between pt-3">
				<div className="flex flex-col gap-1">
					<InputBis type="text" placeholder="Nom du projet" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
					{touched.name && errors.name && <small className="error">{errors.name}</small>}

					<Select label={"Type de projet"} dataList={typesProject} name="type" value={values.type} onChange={handleChange} onBlur={handleBlur} />
					{touched.type && errors.type && <small className="error">{errors.type}</small>}
				</div>
				<div className="flex flex-col gap-1">
					<InputBis type="date" placeholder="Date de Début" name="date_start" value={values.date_start} onChange={handleChange} onBlur={handleBlur} />
					{touched.date_start && errors.date_start && <small className="error">{errors.date_start}</small>}

					<InputBis type="date" placeholder="Date de Fin" name="date_end" value={values.date_end} onChange={handleChange} onBlur={handleBlur} />
					{touched.date_end && errors.date_end && <small className="error">{errors.date_end}</small>}
				</div>
			</div>
			<Button className="my-3" title="Ajouter des collaborateurs" />
			<TextArea placeholder={"Description du projet"} className="w-full" rows={"10"} name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
			{touched.description && errors.description && <small className="error">{errors.description}</small>}
			{error && <p className="error p-5 m-1 border-2 border-red-700 bg-white">{error}</p>}
			<Button type="submit" disabled={!isValid || isSubmitting} className="flex mx-auto mt-3" title="Créer le projet" />
		</form>
	);
}
