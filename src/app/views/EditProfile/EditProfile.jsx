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
  const [experiences, setExperiences] = useState([]);
  const [soft_skills, setSoft_skills] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiGateway.get(URL_BACK_GET_PROFILE);
        setUser(response.data);
        setExperiences(user.experience);
        setSoft_skills(user.setSoft_skills)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleDeleteExperience = (uuid) => {
      const currentUserData = user;
      const foundExperience = currentUserData.experience.findIndex((exp) => exp.uuid === uuid);
      if(foundExperience >= 0) {
        currentUserData.experience.splice(foundExperience,1);
        setUser(currentUserData);
        setExperiences(user.experience);
      }
  }

  const handleAddExperience = (exp) => {
    const currentUserData = user;
    currentUserData.experience.push(exp)
    setUser(currentUserData);
    setExperiences(user.experience);
  }

  const handleDeleteSoft_skill = (uuid) => {
    const currentUserData = user;
    const foundSoft_skill = currentUserData.soft_skill.findIndex((exp) => exp.uuid === uuid);
    if(foundSoft_skill >= 0) {
      currentUserData.soft_skill.splice(foundSoft_skill,1);
      setUser(currentUserData);
      setExperiences(user.soft_skill);
    }
}

const handleAddSoft_skill = (exp) => {
  const currentUserData = user;
  currentUserData.soft_skill.push(exp)
  setUser(currentUserData);
  setExperiences(user.soft_skill);
}

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
          item.exptitle = expTitle
          item.handleDelete = handleDeleteExperience
          return (
            <div className="w-1/2 p-2" key={item.uuid}>
              <ProfileBoxEdit {...item} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <ModalNewExperience handleAdd={handleAddExperience} />
      </div>
      <p className="text-center my-5">Mes SoftSkills</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
        {user.soft_skill?.map((item) => {
          item.softtitle = softTitle;
          item.handleDelete = handleDeleteSoft_skill
          return (
            <div className="w-1/2 p-2" key={item.uuid}>
              <ProfileBoxEdit {...item} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <ModalNewSoftSkills handleAdd={handleAddSoft_skill} />
      </div>
      <div className="pb-5">
        <p className="text-center my-5">Mes projets</p>
        {/* <ProfileProject /> */}
      </div>
    </div>
  )
}