import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { URL_HOME, URL_PROJECT_UPDATE } from "../../constants/urls/urlFrontEnd";

import Button from "../../components/Base/ButtonBis";
import CommentsContainer from "../../components/Project/CommentsContainer";
import apiGateway from "../../api/backend/apiGateway";

function Project() {
  const nav = useNavigate();
  const { uuid } = useParams();

  const [project, setProject] = useState({
    uuid: "",
    name: "",
    date_start: "",
    date_end: "",
    description: "",
  });

  useEffect(() => {
    apiGateway
      .get("/project/" + uuid)
      .then(({ data }) => setProject(data))
      .catch(() => nav(URL_HOME));
  }, []);

  return (
    <div className="items-center gap-4 p-2 bg-gray-1 rounded-md">
      <div>
        <div>
          <h1 className="text-2xl">{project.name}</h1>
          <h3 className="text-xs">
            {project.date_start.slice(0, project.date_start.indexOf("T"))}
            {project.date_end
              ? " - " +
                project.date_end.slice(0, project.date_start.indexOf("T"))
              : ""}
          </h3>
        </div>
      </div>
      <div>
        <h2 className="text-2xl underline">Description du projet</h2>
        <p className="text-base">{project.description}</p>
      </div>
      <CommentsContainer uuid_project={uuid} />
      <div className="flex justify-center">
        <Link to={URL_PROJECT_UPDATE + uuid}>
          <Button title="Mettre à jour"></Button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
