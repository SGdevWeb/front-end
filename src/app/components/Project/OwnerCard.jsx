import React from "react";
import owner from "../../assets/img/icons/Owner.svg";

function OwnerCard({ firstname, lastname, username, descripcion, }) {

  return ( 
    <div className="min-w-[300px]  h-[100px] bg-white mr-3 my-3 p-3 rounded-xl border-2 border-gray-700 ">
      <div className="flex justify-around items-center p-2">
        {/* <img className="card-img-top border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark"
                  src={Logo}
                  alt="Logo de TreeUp"
                  width={80} /> */}
        <div className="flex flex-col">
          <h6 className="ml-2"> {firstname} {lastname}</h6>
          <p className="ml-2">{username} {descripcion}</p> 
        </div>
        <div> 
          <img className="card-img-top py-2"
                  src={owner}
                  alt="Logo de TreeUp"
                  width={25} />
        </div>
      </div>
    </div>
  );
}

export default OwnerCard;