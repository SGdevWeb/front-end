import React from "react";
import ProfileBoxEdit from "../../components/EditProfile/ProfileBoxEdit";
import ProfileUser from "../../components/EditProfile/ProfileUserEdit";
import boxData from "../../fakeData/BoxData";
import SoftSkillsData from "../../fakeData/SoftSkillsData";
import ModalNewExperience from "../../components/EditProfile/ModalNewExperience";
import ModalNewSoftSkills from "../../components/EditProfile/ModalNewSoftSkill";
import profileData from "../../fakeData/ProfileData";
import { selectIsLogged, selectUser } from "../../redux-store/authenticationSlice";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/base/ButtonBis";


export default function EditProfile() {
  const isLoggued = useSelector(selectIsLogged);
  console.log(isLoggued)
  const expTitle = "Ajouter une expérience professionnelle";
  const softTitle = "ajouter un soft_skill";
  const singleProfileData = profileData[0];
  const navigate = useNavigate()

  return (
    <div>
        <div className="bg-[#ececec] justify-center flex-col">
          <ProfileUser key={singleProfileData.fakeid}
            username={singleProfileData.username}
            ob={singleProfileData.job}
            description={singleProfileData.description}
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
            {boxData.map((item) => {
              item.exptitle = expTitle;
              return (
                <div className="w-1/2 p-2" key={item.id}>
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
            {SoftSkillsData.map((item) => {
              item.softtitle = softTitle;
              return (
                <div className="w-1/2 p-2" key={item.id}>
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
    </div>
  )
}