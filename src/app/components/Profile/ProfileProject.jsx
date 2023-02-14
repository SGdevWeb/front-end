import "../../views/Profile/Scrollbar.css";

import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { URL_EDITPROFILE } from "../../constants/urls/urlFrontEnd";

const ProfileProject = () => {
  return (
    <div className="flex ml-7">
      <div className="w-36">
        <Link to={URL_EDITPROFILE}>
          <PlusIcon className="border-2 w-24 rounded-md h-96 shadow-xl bg-white" />
        </Link>
      </div>
      <div className="flex overflow-x-scroll w-auto border-red-500 example">
        <div className="border-2 border-black flex-none mr-3 w-72">salut</div>
        <div className="border-2 border-black flex-none mr-3 w-72">salut</div>
        <div className="border-2 border-black flex-none mr-3 w-72">salut</div>
        <div className="border-2 border-black flex-none mr-3 w-72">salut</div>
        <div className="border-2 border-black flex-none mr-3 w-72">salut</div>
      </div>
    </div>
  );
};

export default ProfileProject;