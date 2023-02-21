import Button from "../../components/Base/Button";
import InputBis from "../../components/base/InputBis";
import React from "react";
import TextArea from "../../components/base/TextArea";

export default function CreateProject() {
  return (
    <div className="p-3 bg-gray-1">
      <div className="">
        <img
          className="rounded-xl justify-center items-center"
          src={"https://dummyimage.com/1200x300.png/5fa2dd/ffffff"}
          alt="Projet"
          loading="lazy"
        />
      </div>
      <Button className="w-1/6 mt-3" title="Ajouter une image" />
      <div className="flex justify-between">
        <InputBis
          type="email"
          placeholder="Nom du projet"
          name="email"
          className="w-1/2 mr-2"
        />
        <InputBis
          type="email"
          placeholder="Date de Début"
          name="email"
          className="w-1/6 ml-2"
        />
      </div>
      <div className="flex justify-between">
        <InputBis
          type="email"
          placeholder="Type du projet"
          name="email"
          className="w-1/2 mr-2"
        />
        <InputBis
          type="email"
          placeholder="Date de Fin"
          name="email"
          className="w-1/6 ml-2"
        />
      </div>
      <Button className="w-1/5 mt-3" title="Ajouter des collaborateurs" />
      <TextArea
        placeholder={"Description du projet"}
        className="w-full"
        rows={"15"}
      />
      <div className="flex justify-center">
        <Button className="w-1/6 mt-3" title="Créer le projet" />
      </div>
    </div>
  );
}
