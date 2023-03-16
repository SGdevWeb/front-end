import Logo from "../../assets/img/LogoTreeUp100x100.png";
import React from "react";

function CollaboratorCard2({ firstname, lastname, username, descripcion, }) {

  return ( 
    <div className="min-w-[300px]  h-[100px] bg-gray-200 ml-3 mb-3 p-2 border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark">
      <div className="flex justify-around p-2">
        {/* <img className="card-img-top border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark"
                  src={Logo}
                  alt="Logo de TreeUp"
                  width={80} /> */}
        <div className="flex flex-col">
          <h6 className="ml-2">{firstname} {lastname}</h6>
          <p className="ml-2">{username} {descripcion}</p> 
        </div>
        <div> 
          <button className="ml-4" type="button" ></button>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorCard2;