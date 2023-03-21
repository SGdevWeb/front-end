import React from "react";
import collaboratorSVG from "../../assets/img/icons/Collaborator.svg";

function CollaboratorCard({ firstname, lastname, username, descripcion, onDelete }) {

  return ( 
    <div className="min-w-[300px] h-[100px] bg-white mr-3 my-3 p-2 rounded-xl border-2 border-gray-700">
      <div className="flex justify-around p-2">
        {/* <img className="card-img-top border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark"
                  src={Logo}
                  alt="Logo de TreeUp"
                  width={80} /> */}
        <div className="flex flex-col">
          <h6 className="ml-2"> {firstname} {lastname}</h6>
          <p className="ml-2">{username}{descripcion}</p> 
        </div>
        <div> 
          <button className="ml-4" type="button" onClick={onDelete}>X</button>
          <img className="card-img-top py-2 ml-2 mt-3"
                  src={collaboratorSVG}
                  alt="Logo de TreeUp"
                  width={20} />
        </div>
      </div>
    </div>
  );
}

export default CollaboratorCard;