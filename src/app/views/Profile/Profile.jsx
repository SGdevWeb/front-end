import "./Scrollbar.css";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PillTechnologie from "../../components/Technos/PillTechnologie";
import ProfileBox from "../../components/Profile/ProfileBox";
import ProfileProject from "../../components/Profile/ProfileProject";
import ProfileUser from "../../components/Profile/ProfileUser";
import apiGateway from '../../api/backend/apiGateway';
import { useParams } from "react-router";
import { URL_BACK_GET_PROFILE } from "../../constants/urls/urlBackEnd";
import technologies from "../../fakeData/Techno";


export default function Profile() {

  const { uuid } = useParams();
  const [user,setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiGateway.get(URL_BACK_GET_PROFILE);
        setUser(response.data);
        const userData = response.data;
        // Check if experiences array exists in the user data
        if (userData && userData.experience && userData.experience.length > 0) {
          setUser(userData);
        } else {
          setUser({ ...userData, experience: [] });
        }

        // Check if softskills array exists in the user data
        if (userData && userData.soft_skill && userData.soft_skill.length > 0) {
          setUser(userData);
        } else {
          setUser({ ...userData, soft_skill: [] });
        }
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
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          date_birth={user.date_birth ? user.date_birth : '1900/01/01'}
          work={user.work}
          username={user.username}
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
        {user.experience && user.experience.length > 0 ? (
          user.experiences.map((item) => (
            <div className="w-1/2 p-2" key={item.id}>
              <ProfileBox {...item} />
            </div>
          ))
        ) : (
          <p>Aucune expérience disponible</p>
        )}
      </div>
      <p className="text-center my-5">Mes SoftSkills</p>
      <div className="flex flex-wrap h-64 overflow-auto scrollbar">
      {user.soft_skill && user.soft_skill.length > 0 ? (
          user.softskills.map((item) => (
            <div className="w-1/2 p-2" key={item.id}>
              <ProfileBox {...item} />
            </div>
          ))
        ) : (
          <p>Aucun soft-skill disponible</p>
        )}
      </div>
      <div className="pb-5">
        <p className="text-center my-5">Mes projets</p>
        <ProfileProject />
      </div>
    </div>
  );
}
