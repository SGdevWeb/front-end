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

    const checkDimensions = (imgUrl) => {
        const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                resolve(!(img.naturalWidth > 200 || img.naturalHeight > 200));
            }
            img.onerror = reject;
        })
        return promise;
    }

    const fileToBase64 = (file) => {
        const promise = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                resolve(reader.result);
            }
        })
        return promise
    }

    const handleChangeAvatar = async e => {
        const [file] = e.target.files;
        if (file) {
            let urlfile = await fileToBase64(file);
            if (await checkDimensions(urlfile)) {
                setAvatarUrl(urlfile);
                setAvatarFile(file);
            } else {
                alert(`image superieure à 200x200`);
            }
        }
    }

    const handleUploadAvatar = async () => {
        try {
            if (avatarFile) {
                const formData = new FormData();
                formData.append('image', avatarFile);
                const response = await postAvatar(formData);
                if (response.status === 200) {
                    props.handleAvatar(avatarUrl);
                    setShowModal(false);
                } else {
                    return (<div>error</div>)
                }
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
                                <div className="relative px-8 flex-col mb-3 h-fit text-center ">
                                    {avatarUrl ?
                                        <img
                                            src={avatarUrl}
                                            alt='user avatar'
                                            className="w-80 h-80"
                                        /> :
                                        <UserCircleIcon className="w-80 h-80" />
                                    }
                                    <InputFile onChange={handleChangeAvatar} accept="image/jpg,image/png" className="my-1" />
                                    <div className="flex-row">
                                        <p>Dimensions maximum : 200x200</p>
                                    </div>
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