import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { URL_HOME, URL_PROJECT_UPDATE } from "../../constants/urls/urlFrontEnd";

import Button from "../../components/Base/ButtonBis";
import CollaboratorCard2 from "../../components/Project/CollaboratorCard2";
import CommentsContainer from "../../components/Project/CommentsContainer";
import ConfirmPopup from "../../components/base/ConfirmPopup";
import OwnerCard from "../../components/Project/OwnerCard";
import { URL_BACK_PROJECT } from "../../constants/urls/urlBackEnd";
import apiGateway from "../../api/backend/apiGateway";
import { getToken } from "../../services/tokenServices";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import { useSelector } from "react-redux";

function Project() {
  const nav = useNavigate();
  const { uuid } = useParams();
  const isLoggued = useSelector(selectIsLogged);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState();

  const [project, setProject] = useState({
    uuid: "",
    name: "",
    date_start: "",
    date_end: "",
    description: "",
  });

  //dave
  const [collaborators, setCollaborators] = useState([]);
  const [owners, setOwners] = useState([]);
  // const [ownersID, setOwnersID] = useState([]);
  // const [collaboratorsID, setCollaboratorsID] = useState([]);
  // console.log('ownerID',ownersID);
  // console.log('CollaID',collaboratorsID);
  // console.log('ow',owners);
  // console.log('col',collaborators)


  
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
    apiGateway
      .get("/collaborators/project/" + uuid)
      .then(({ data }) => {
        const { owners, collaborators } = data;
        // setOwnersID(owners);
        // setCollaboratorsID(collaborators)
        
        // console.log('owner',owners);
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
    (collaborator) => !owners.some((owner) => owner.user.uuid === collaborator.user.uuid)
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
        <p className="text-base break-words">{project.description}</p>
      </div>
      {/* <h2 className="text-2xl underline mb-2">Collaborateurs</h2> */}
{/* 
      <div className="overflow-x-auto flex">
       
        {owners.map((item) => (
          <OwnerCard
            key={item.user.uuid}
            firstname={item.user.firstname}
            lastname={item.user.lastname}
            username={item.user.username}
            descripcion={item.user.profile.descripcion}
          />
        ))}
      
        {collaboratorsWithoutOwners.map((item) => (
          <CollaboratorCard2
            key={item.user.uuid}
            firstname={item.user.firstname}
            lastname={item.user.lastname}
            username={item.user.username}
            descripcion={item.user.profile.descripcion}
          />
        ))}
       
      </div> */}

      <CommentsContainer uuid_project={uuid} />
      {isLoggued ? (
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
      ) : (
        ""
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
