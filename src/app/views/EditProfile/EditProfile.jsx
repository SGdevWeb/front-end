import React, { useEffect, useState } from "react";
import ProfileBoxEdit from "../../components/EditProfile/ProfileBoxEdit";
import ProfileUser from "../../components/EditProfile/ProfileUserEdit";
import ModalNewExperience from "../../components/EditProfile/ModalNewExperience";
import ModalNewSoftSkills from "../../components/EditProfile/ModalNewSoftSkill";
import { URL_BACK_GET_PROFILE } from "../../constants/urls/urlBackEnd";
import apiGateway from '../../api/backend/apiGateway';


export default function EditProfile() {
  const expTitle = "Ajouter une expérience professionnelle";
  const softTitle = "ajouter un soft_skill";
  const [user, setUser] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiGateway.get(URL_BACK_GET_PROFILE);
        console.log(response.data)
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[#ececec] justify-center flex-col">
      <ProfileUser
        username={user.username}
        job={user.work}
        description={user.description}
      />
      <p className="text-center my-5">Liste des technos</p>
      <div className="flex-col w-full items-center justify-center h-64 border-2 border-white overflow-auto scrollbar">
        <div className="flex flex-wrap justify-center w-full">
          {/* {technologies.map((items) => (
                <div className="w-1/3 p-2" key={items.uuid}>
                  <PillTechnologie {...items} />
                </div>
              ))} */}
        </div>
      </div>
      <p className="text-center my-5">Mes expériences</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
        {user.experience?.map((item) => {
          item.exptitle = expTitle;
          return (
            <div className="w-1/2 p-2" key={item.uuid}>
              <ProfileBoxEdit {...item} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <ModalNewExperience />
      </div>
      <p className="text-center my-5">Mes SoftSkills</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
        {user.soft_skill?.map((item) => {
          item.softtitle = softTitle;
          return (
            <div className="w-1/2 p-2" key={item.uuid}>
              <ProfileBoxEdit {...item} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <ModalNewSoftSkills />
      </div>
      <div className="pb-5">
        <p className="text-center my-5">Mes projets</p>
        {/* <ProfileProject /> */}
      </div>
    </div>
  )
}