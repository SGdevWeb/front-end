import "../../views/Profile/Scrollbar.css";

import React, { useEffect, useState } from "react";
import CardProject from "../Project/CardProject";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import { URL_BACK_PROJECT } from "../../constants/urls/urlBackEnd";
import { URL_CREATEPROJECT } from "../../constants/urls/urlFrontEnd";
import apiGateway from "../../api/backend/apiGateway";

const ProfileProject = ({uuid = "744966ab-07f3-48b3-9799-4b074c553230"}) => {

  const [projects, setProjects] = useState([]);
	const [error, setError] = useState();

  useEffect(() => {
		apiGateway.get(URL_BACK_PROJECT + "/user/" + uuid)
		.then((({data}) => setProjects(data)))
		.catch(({error}) => setError(error.message));
	}, []);
  
  return (
    <div className="flex ml-7">
      <div className="">
        <Link to={URL_CREATEPROJECT}>
          <PlusIcon className="border-2 w-24 rounded-md h-full mr-5 shadow-xl bg-white" />
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-scroll w-auto border-red-500 scrollbar">
      {projects.map((project) => (
        <CardProject key={project.uuid} {...project} />
      ))}
      {error && (
				<p className="error p-5 m-1 border-2 border-red-700 bg-white">
				{error}
				</p>
			)}
      </div>
    </div>
  );
};

export default ProfileProject;