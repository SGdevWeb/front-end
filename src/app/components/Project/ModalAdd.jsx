import React, { useEffect, useState } from "react";
import { getUser, getUsers } from "../../api/backend/account";

import Button from "../base/Button";
import CheckBox from "../base/CheckBox";
import Logo from "../../assets/img/LogoTreeUp100x100.png";
import { SearchIcon } from "@heroicons/react/solid";

export const ModalAdd = ({ isVisible, onClose, onClose1, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const showData = async () => {
    const response = await getUsers();

    setUsers(response.data.users);
  };
  //

  //funtion de busqueda

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? users
    : users.filter((dato) =>
        dato.firstname.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelection = (id, checked) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id]);
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    }
  };

  const handleSubmit = () => {
    onClose1(selectedUsers);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px]  h-[700px] md:h-[650px] lg:h-[680px] xl:h-[600px] flex flex-col bg-white rounded-xl p-4 ">
        <button className="text-red bg-gray-200 px-2 mb-1  border-gradient-v rounded-md text-xl place-self-end" onClick={onClose}>
          X
        </button>
        <div className="flex items-center border-gradient-v border-2 rounded-lg">
          <SearchIcon className="h-6 w-6 m-1 border-0 active:border-2  rounded-lg" />
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Rechercher un utilisateur"
            className="w-full border-0  py-1"
            name=""
            id=""
          />
        </div>
        {/* afichar los elementos */}
        <div className="bg-white p-2 my-3 rounded-xl h-[600px] overflow-y-scroll ">
          {results.length ? (
            results.map((user) => (
              <div
                key={user.uuid}
                className="w-full h-[100px] mb-2 p-3 bg-gray-200 flex justify-around rounded-xl"
              >
                <img
                  className="border-gradient-v rounded-2xl shadow-sm hover:shadow-inner shadow-dark"
                  src={Logo}
                  alt="Logo de TreeUp"
                  width={80}
                />
                <div className="grow flex flex-col justify-evenly ">
                  <div className="pl-2">
                    <h5>{user.firstname}</h5>
                  </div>
                  <div className="pl-2">{user.username} </div>
                </div>
                <div className="m-auto">
                  <CheckBox
                    text=""
                    id={user.uuid}
                    onChange={(e) =>
                      handleUserSelection(user.uuid, e.target.checked)
                    }
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Chargement des utilisateurs...</p>
          )}
        </div>
        {/* {selectedUsers.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedUsers.map((userId) => (
                <tr key={userId}>
                  <td className="text-center">
                    {users.find((user) => user.uuid === userId).firstname}
                  </td>
                  <td className="text-start"> ✅</td>
                </tr>
              ))}
            </tbody>
          </table>
        )} */}
        {/* <Button
          className="w-full sm:w-4/5 m-auto"
          title="Ajouter les utilisateurs sélectionnés"
          type="submit"
          onClick={handleSubmit}
        /> */}
        <button
          className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 my-3 border-gradient-v border-4 rounded-lg text-primary hover:text-white px-3 py-2 m-auto "
          onClick={handleSubmit}
        >
          Ajouter les utilisateurs sélectionnés
        </button>
      </div>
    </div>
  );
};
