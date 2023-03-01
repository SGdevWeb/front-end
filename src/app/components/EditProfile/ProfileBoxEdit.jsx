import React from "react";
import { XIcon } from "@heroicons/react/solid";
import ModalEditExperience from "./ModalEditExeperience";
import ModalEditSoftSkills from "./ModalEditSoftSkills";

function ProfileBoxEdit(props){
    return (
        <div>
            <div className="bg-white rounded-lg mx-5 p-5 flex ">
                <div className="w-full">
                    <div className="flex justify-between">
                        <p className="text-xl font-bold">{props.name}</p>
                        <div className="flex-col pr-1">
                            {props.date_start && <p className="text-xs">{props.date_start}</p>}
                            {props.date_end && <p className="text-xs">{props.date_end}</p>}
                        </div>
                    </div>
                    {props.place && <p className="text-xs">{props.place}</p>}
                    <hr className="my-2" />
                    <p className="font-bold">Description</p>
                    <p className="text-sm">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between ml-1">
                    <button>
                        <XIcon className='h-4 w-4 m-1' />
                    </button>
                    {props.exptitle ? (<ModalEditExperience {...props} />) :null}
                    {props.softtitle ? (<ModalEditSoftSkills {...props} />) :null}
                    
                </div>
            </div>
        </div>
    )
} 

export default ProfileBoxEdit;