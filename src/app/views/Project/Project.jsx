import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { URL_HOME, URL_PROJECT_UPDATE } from "../../constants/urls/urlFrontEnd";
import {
	selectIsLogged,
	selectUser,
} from "../../redux-store/authenticationSlice";

import Button from "../../components/Base/ButtonBis";
import { ChatAltIcon } from "@heroicons/react/solid";
import CollaboratorCardView from "../../components/Project/CollaboratorCardView";
import CommentsContainer from "../../components/Project/CommentsContainer";
import ConfirmPopup from "../../components/base/ConfirmPopup";
import LikeButton from "../../components/Project/LikeButton";
import { URL_BACK_PROJECT } from "../../constants/urls/urlBackEnd";
import apiGateway from "../../api/backend/apiGateway";
import { getProjectLogged } from "../../api/backend/project.js";
import { getToken } from "../../services/tokenServices";
import { useSelector } from "react-redux";

function Project() {
  const nav = useNavigate();
  const { uuid } = useParams();
  const isLoggued = useSelector(selectIsLogged);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState();
	const user = useSelector(selectUser);

  const [project, setProject] = useState({
    uuid: "",
    name: "",
    date_start: "",
    date_end: "",
    description: "",
    countLikes: 0,
    liked: false,
  });

  //dave
  const [collaborators, setCollaborators] = useState([]);
  const [owners, setOwners] = useState([]);
  const [ownersID, setOwnersID] = useState([]);
  const [collaboratorsID, setCollaboratorsID] = useState([]);

  const token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    isLoggued
      ? getProjectLogged(uuid)
          .then(({ data }) => setProject(data))
          .catch(() => nav(URL_HOME))
      : apiGateway
          .get("/project/" + uuid)
          .then(({ data }) => setProject(data))
          .catch(() => nav(URL_HOME));
  }, [isLoggued]);

  useEffect(() => {
    apiGateway
      .get("/collaborators/project/" + uuid)
      .then(({ data }) => {
        const { owners, collaborators } = data;

        Promise.all(
          collaborators.map((collaboratorId) =>
            apiGateway.get(`/users/${collaboratorId}`, config)
          )
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

  const collaboratorsWithoutOwners = collaborators.filter(
    (collaborator) =>
      !owners.some((owner) => owner.user.uuid === collaborator.user.uuid)
  );

  const removeProject = () => {
    apiGateway.delete(URL_BACK_PROJECT + "/" + uuid, config)
    .then(() => {
      nav(URL_HOME); 
      setShowDeletePopup(false);
    }).catch((err) => {
      console.log(err.response.data);
      setErrorPopup(err.response ? err.response.data.message : err.message);
    });
  };

  return (
    <div className="flex flex-col gap-5 p-2 rounded-md">
      <div className="flex justify-between">   
        <div>
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <h2 className="text-xl font-medium mt-1">{project.type?.name}</h2>
        </div>
        
        <div className="text-end font-medium">
          <h3 className="text-xl">
            Début :&nbsp;
            {project.date_start.slice(0, project.date_start.indexOf("T"))}
          </h3>
          <h3 className="text-xl mt-1">
            Fin :&nbsp;
            {project.date_end && 
              project.date_end.slice(0, project.date_start.indexOf("T"))
            }
          </h3>
        </div>
      </div>

      <div className="fixed top-1/3 right-0 w-40 flex flex-col gap-2">
          <LikeButton
            isLogged={isLoggued}
            project={project}
            setProject={setProject}
          />
          <div 
            path={`/project/${uuid}#comments`} 
            onClick={() => {document.querySelector(".overflow-y-auto").scroll({top: document.scrollingElement.scrollHeight, behavior: 'smooth'})}}
            className="bg-gray-200 text-center text-sm hover:font-medium flex items-center gap-2 py-1 px-3 rounded-l-md cursor-pointer"
          >
            <ChatAltIcon className="w-10" />
            <p>Mettre un commentaire</p>
          </div>
      </div>

      <div>
        <h3 className="text-xl font-medium">Collaborateur(s) du projet :</h3>
        <div className="flex justify-center gap-3 overflow-x-auto">
          {owners.map((item) => (
            <CollaboratorCardView
              key={item.user.uuid}
              {...item.user}
              descripcion={item.user.profile.descripcion}
              owner={true}
              className="w-52"
            />
            
          ))}

          {collaboratorsWithoutOwners.map((item) => (
            <CollaboratorCardView
              key={item.user.uuid}
              {...item.user}
              descripcion={item.user.profile.descripcion}
              className="w-52"
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium">Description du projet :</h2>
        <p className="text-base break-words mt-1">{project.description}</p>
      </div>
      
      <CommentsContainer uuid_project={uuid} />
      
      {isLoggued && owners[0]?.user.uuid === user?.uuid && (
        <div className="flex justify-center">
          <Button 
            title="Demande de suppression" 
            onClick={() => setShowDeletePopup(true)} 
            className="mr-3"
          />
          <Link to={URL_PROJECT_UPDATE + uuid}>
            <Button title="Mettre à jour"></Button>
          </Link>
        </div>
      )}
      
      <ConfirmPopup 
        body={
          <>
            <h3 className="h3 text-center">Supprimer le projet</h3>
            <p className="text-center">Êtes-vous sur ?</p>
          </>
        }
        show={showDeletePopup}
        yesAction={removeProject}
        noAction={() => setShowDeletePopup(false)}
        error={errorPopup}
      />
    </div>
  );
}

export default Project;
