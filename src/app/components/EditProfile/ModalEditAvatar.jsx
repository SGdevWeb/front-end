import React, { useState, useEffect } from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { Field, Formik } from 'formik';
import ButtonBis from '../base/ButtonBis';
import { updateExperience } from '../../api/backend/profile';
import validationSchema from '../../utils/experienceSchema';

export default function ModalEditAvatar(props) {
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        setAvatar(props.avatar)
    }, [])
    

    return (
        <div>
            <ButtonBis className="mt-3 w-full" title="Editer ma photo" onClick={() => setShowModal(true)} />
            {showModal ? (
                <Formik
                    initialValues={avatar}
                    onSubmit={async (values, actions, initialValues) => {
                        
                    }}
                    validationSchema={validationSchema}
                >
                    {props => (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative my-6 mx-auto max-w-2x1 w-2/6 min-w-fit">
                                    {/*content*/}
                                    <div className="border-4 border-solid border-black rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <form onSubmit={props.handleSubmit}>
                                            <div className="flex justify-end p-1 border-solid rounded-t">
                                                <button onClick={() => setShowModal(false)} type="button">
                                                    <XIcon className='h-4 w-4 m-1' />
                                                </button>
                                            </div>
                                            <div className="relative px-8 flex-col justify-around text-center mb-3 ">
                                                <ButtonBis
                                                    title="Modifier"
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
            ) : null}
        </div>
    )
}