import "./Scrollbar.css";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PillTechnologie from "../../components/Technos/PillTechnologie";
import ProfileBox from "../../components/Profile/ProfileBox";
import ProfileProject from "../../components/Profile/ProfileProject";
import ProfileUser from "../../components/Profile/ProfileUser";
import axios from "axios";
import { useParams } from "react-router";

import SoftSkillsData from "../../fakeData/SoftSkillsData";

//import { selectUser } from "../../redux-store/authenticationSlice";
import boxData from "../../fakeData/BoxData";
import profileData from "../../fakeData/ProfileData";
import technologies from "../../fakeData/Techno";


export default function Profile() {
  //const singleProfileData = profileData[0];
  //const user = useSelector(selectUser);
  const { uuid } = useParams();
  const [user,setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8010/api/userprofile/${uuid}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [uuid]);

  return (
    <div className="bg-[#ececec] justify-center flex-col">
      <div >
        <ProfileUser
          uuid_user={uuid}
          email={user.email}
          firstname={user.firstname}
          lastname={user.lastname}

        />
      </div>
      <p className="text-center my-5">Liste des technos</p>
      <div className="flex-col w-full items-center justify-center h-64 overflow-auto scrollbar">
        <div
          className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto max-w-4xl"
          style={{ gridTemplateRows: "50px 50px" }}
        >
          {technologies.map((items) => (
            <div className="p-2" key={items.uuid} style={{ height: "50px" }}>
              <PillTechnologie {...items} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center my-5">Mes expériences</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
        {boxData.map((item) => (
          <div className="w-1/2 p-2" key={item.id}>
            <ProfileBox {...item} />
          </div>
        ))}
      </div>
      <p className="text-center my-5">Mes SoftSkills</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
        {SoftSkillsData.map((item) => (
          <div className="w-1/2 p-2" key={item.id}>
            <ProfileBox {...item} />
          </div>
        ))}
      </div>
      <div className="pb-5">
        <p className="text-center my-5">Mes projets</p>
        <ProfileProject />
      </div>
    </div>
  );
}
