import React from "react";
import avatar from "../../assets/img/icons/avatar.svg";

function CollaboratorCard2({ firstname, lastname, username, descripcion, }) {

  return ( 
    <div className="divColl_6 ">
     
        <img className="divColl_7 "
                  src={avatar}
                  alt="Logo de TreeUp"
                  />
        <div className="divColl_8">
          <div className="divColl_9 "> {firstname} {lastname}</div>
          <div className="divColl_10">{username}{descripcion}</div> 
        </div>
        
      </div>
  );
}

export default CollaboratorCard2;