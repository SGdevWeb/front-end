import Logo from "../../assets/img/LogoTreeUp100x100.png";
import React from "react";

function CollaboratorCard({ firstname, username, email }) {

  return ( 
    <div className="min-w-[300px]  h-[100px] bg-gray-200 ml-3 mb-3 border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark">
      <div className="flex p-2">
        <img className="card-img-top border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark"
                  src={Logo}
                  alt="Logo de TreeUp"
                  width={80} />
        <div className="flex flex-col">
          <h6 className="ml-2">{firstname}</h6>
          <p className="ml-2">{username}</p>
          <p className="ml-2">{email}</p>
          
        </div>
      </div>
    </div>
  );
}

export default CollaboratorCard;