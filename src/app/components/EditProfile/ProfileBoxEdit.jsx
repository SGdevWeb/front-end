import React, { useState} from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import ModalEditExperience from "./ModalEditExeperience";

function ProfileBoxEdit(props){
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="bg-white rounded-lg mx-5 p-5 flex justify-between ">
                <div>
                    <div className="flex justify-between">
                        <p className="text-xl font-bold">{props.name}</p>
                        {props.date_start && <p className="text-xs">{props.date_start}</p>}
                    </div>
                    {props.location && <p className="text-xs">{props.location}</p>}
                    <hr className="my-2" />
                    <p className="font-bold">Description</p>
                    <p className="text-sm">{props.description}</p>
                </div>
                <div className=" flex-col flex justify-between">
                    <button>
                        <XIcon className='h-4 w-4 m-1' />
                    </button>
                    {props.exptitle ? (<ModalEditExperience {...props} />) :null}
                    {props.softtitle ? (<ModalEditExperience {...props} />) :null}
                    
                </div>
            </div>
        </div>
    )
} 

export default ProfileBoxEdit;