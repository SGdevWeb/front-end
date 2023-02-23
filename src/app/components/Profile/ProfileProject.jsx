import "../../views/Profile/Scrollbar.css";

import CardProject from "../Project/CardProject";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { URL_CREATEPROJECT } from "../../constants/urls/urlFrontEnd";
import projectData from "../../fakeData/ProjectData";

const ProfileProject = () => {
  return (
    <div className="flex ml-7">
      <div className="">
        <Link to={URL_CREATEPROJECT}>
          <PlusIcon className="border-2 w-24 rounded-md h-full mr-5 shadow-xl bg-white" />
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-scroll w-auto border-red-500 scrollbar">
      {projectData.map((project) => (
        <CardProject key={project.uuid} {...project} />
      ))}
      </div>
    </div>
  );
};

export default ProfileProject;