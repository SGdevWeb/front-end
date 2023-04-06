import React, { useState, useEffect, useRef } from "react";
import { XIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import ButtonBis from '../base/ButtonBis';
import InputFile from "../base/InputFile";
import { postAvatar } from '../../api/backend/avatar';

export default function ModalEditAvatar(props) {
    const [showModal, setShowModal] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [avatarFile, setAvatarFile] = useState(null);

    useEffect(() => {
        setAvatarUrl(props.avatar)
    }, [props.avatar])


    const handleChangeAvatar = e => {
        const [file] = e.target.files;
        if (file) {
            console.log(file)
            const url = URL.createObjectURL(file)
            setAvatarUrl(url);
            setAvatarFile(file)
        }
    }

    const handleUploadAvatar = async () => {
        try {
            const formData = new FormData();
            formData.append('image', avatarFile);
            const response = await postAvatar(formData);
            if(response.status === 200){
                props.handleAvatar(avatarUrl);
                setShowModal(false);
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <ButtonBis className="mt-3 w-full" title="Editer ma photo" onClick={() => setShowModal(true)} />
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto max-w-2x1 w-96 min-w-fit">
                            {/*content*/}
                            <div className="border-4 border-solid border-black rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex justify-end p-1 border-solid rounded-t">
                                    <button onClick={() => setShowModal(false)} type="button">
                                        <XIcon className='h-4 w-4 m-1' />
                                    </button>
                                </div>
                                <div className="relative px-8 flex-col justify-around text-center mb-3 ">
                                    {avatarUrl ?
                                        <img
                                            src={avatarUrl}
                                            alt='user avatar'
                                            className="w-80"
                                        /> :
                                        <UserCircleIcon className="w-80" />
                                    }
                                    <InputFile onChange={handleChangeAvatar} accept="image/*" />
                                    <ButtonBis
                                        title="Modifier"
                                        onClick={handleUploadAvatar}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}