import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { URL_HOME, URL_PROJECT_UPDATE } from "../../constants/urls/urlFrontEnd";

import Button from "../../components/Base/ButtonBis";
import LikeButton from "../../components/Project/LikeButton";
import CollaboratorCard from "../../components/Project/CollaboratorCard";
import CommentsContainer from "../../components/Project/CommentsContainer";
import apiGateway from "../../api/backend/apiGateway";
import { getToken } from "../../services/tokenServices";
import selectIsLogged from "../../redux-store/authenticationSlice";

function Project() {
  const nav = useNavigate();
  const { uuid } = useParams();

  const [project, setProject] = useState({
    uuid: "",
    name: "",
    date_start: "",
    date_end: "",
    description: "",
    countLikes: 0
  });

  //dave
  const [collaborators, setCollaborators] = useState([]);
  const [owners, setOwners] = useState([]);
  const token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    apiGateway
      .get("/project/" + uuid)
      .then(({ data }) => setProject(data))
      .catch(() => nav(URL_HOME));
  }, []);
  useEffect(() => {
    apiGateway.get("/collaborators/project/" + uuid)
      .then(({ data }) => {
        const { owners, collaborators } = data;
        Promise.all(
          collaborators.map((collaboratorId) => apiGateway.get(`/users/${collaboratorId}`, config))
        ).then((responses) => {
          const collaboratorsData = responses.map((response) => response.data);
          setCollaborators(collaboratorsData);
        });
        Promise.all(
          owners.map((ownerId) => apiGateway.get(`/users/${ownerId}`, config))
        ).then((responses) => {
          const ownersData = responses.map((response) => response.data);
          setOwners(ownersData);
        });
      })
      .catch(() => nav(URL_HOME));
  }, []);


  console.log(project)
  return (
    <div className="items-center gap-4 p-2 bg-gray-1 rounded-md">
      <div className="flex justify-between">
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
        <div>
        <LikeButton 
          isLogged={selectIsLogged} 
          isliked={false} 
          project={project}
          setProject = {setProject}
        />
        </div>
      </div>
      <div>
        <h2 className="text-2xl underline">Description du projet</h2>
        <p className="text-base break-words">{project.description}</p>
      </div>
      <h2 className="text-2xl underline">Collaborateurs</h2>

      <div className="flex flex-wrap">
        {owners.map((item) => (
          
          <CollaboratorCard
          
            key={item.user.uuid}
            firstname={item.user.firstname}
            username={item.user.username}
            email={item.user.email}
          />
        ))}
      </div>
      <div className="flex flex-wrap">
        {collaborators.map((item) => (
          
          <CollaboratorCard
            key={item.user.uuid}
            firstname={item.user.firstname}
            username={item.user.username}
            email={item.user.email}
          />
        ))}
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
