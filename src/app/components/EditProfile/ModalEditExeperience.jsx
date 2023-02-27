import React, { useState} from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { Field, Formik } from 'formik';
import ButtonBis from '../base/ButtonBis'
import apiGateway from '../../api/backend/apiGateway';
import { URL_BACK_UPDATE_EXPERIENCE} from '../../constants/urls/urlBackEnd';
import * as Yup from 'Yup';

export default function ModalEditExperience({name, date_start, date_end, location, description, uuid, exptitle}){
    const [showModal, setShowModal] = useState(false);

    const formShema = Yup.object().shape({
        name : Yup.string().min(3).max(30).required('required'),
        date_start : Yup.string().required('required').matches(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)/gm),
        date_end : Yup.string().matches(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)/gm),
        location : Yup.string().min(3).required('required'),
        description : Yup.string().min(3).required('required')
    })

    return (
        <div>
            <button onClick={() => setShowModal(true)}>
                <PencilIcon className='h-4 w-4 m-1' />
            </button>
        {showModal ? (
                <Formik
                initialValues={{
                    name : name ? name : "titre",
                    date_start : date_start ? date_start : "",
                    date_end : date_end ? date_end : "",
                    location : location ? location : "lieux",
                    description : description ? description : "description"
                }}
                onSubmit={async (values, actions) => {
                    await apiGateway.post(URL_BACK_UPDATE_EXPERIENCE,values).then((res) => {
                        console.log(res);
                        setShowModal(false);
                    }).catch((err) => {
                        if(err){
                            alert("erreur server")
                        }
                        console.log(err);
                        setShowModal(false);
                    });
                  }}
                  //validationSchema={formShema}
                >
                    {props => (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-2x1">
                                        {/*content*/}
                                        <div className="border-4 border-solid border-black rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <form onSubmit={props.handleSubmit}>
                                                <div className="flex justify-end p-1 border-solid rounded-t">
                                                    <button onClick={() => setShowModal(false)} type="button">
                                                        <XIcon className='h-4 w-4 m-1' />
                                                    </button>
                                                </div>
                                                <div className="relative px-8 flex-col justify-around text-center mb-3 ">
                                                    <p className="text-3x1">{exptitle}</p>
                                                    <Field
                                                        className="border-2 border-gradient-v rounded-lg my-2 w-full"
                                                        id="name" 
                                                        name="name" 
                                                        type="text"
                                                    />
                                                    <div className="flex justify-between">
                                                        <Field 
                                                            id="date_start" 
                                                            name="date_start" 
                                                            type="date" 
                                                            className="border-2 border-gradient-v rounded-lg my-2 "
                                                        />
                                                        <Field 
                                                            id="date_end" 
                                                            name="date_end" 
                                                            type="date" 
                                                            className="border-2 border-gradient-v rounded-lg my-2 "
                                                        />
                                                    </div>
                                                    <Field 
                                                        id="location"  
                                                        name="location" 
                                                        type="text"  
                                                        className="border-2 border-gradient-v rounded-lg my-2 w-full"
                                                    />
                                                    <Field 
                                                        as="textarea" 
                                                        id="description" 
                                                        name="description"  
                                                        className="border-2 border-gradient-v rounded-lg my-2 w-full h-20 resize-none"
                                                    />
                                                    <ButtonBis 
                                                        title="Ajouter une exepérience" 
                                                        type="submit"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        )}
                </Formik>
            ) : null }
        </div>
    )
}