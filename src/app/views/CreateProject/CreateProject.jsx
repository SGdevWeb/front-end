import React, { useState } from "react";

import Button from "../../components/Base/Button";
import ButtonBis from "../../components/Base/ButtonBis";
import InputBis from "../../components/base/InputBis";
import Select from "../../components/base/Select";
import TextArea from "../../components/base/TextArea";
import typesProject from "../../fakeData/TypeData";

export default function CreateProject() {
  const [name, setName] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState(null);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const create = () => {
    const payload = { name, date_start: dateStart, type, description };
    if (dateEnd) {
      payload.date_end = dateEnd;
    }
    console.log(payload);
  };

  return (
    <div className="p-3 bg-gray-1">
      <img
        className="rounded-xl justify-center items-center"
        src={"https://dummyimage.com/1200x300.png/5fa2dd/ffffff"}
        alt="Projet"
        loading="lazy"
      />
      <Button className="w-1/6 mt-3" title="Ajouter une image" />
      <div className="flex justify-between pt-3">
        <InputBis
          type="text"
          placeholder="Nom du projet"
          name="text"
          className="w-1/2"
          onChange={(e) => setName(e.target.value)}
        />
        <InputBis
          type="date"
          placeholder="Date de Début"
          name="date"
          className="w-1/6"
          onChange={(e) => setDateStart(e.target.value)}
        />
      </div>
      <div className="flex justify-between pt-3">
        <Select className="w-1/2" label={"Type de projet"} dataList={typesProject} onChange={(e) => setType(e.target.value)} />
        <InputBis
          type="date"
          placeholder="Date de Fin"
          name="date"
          className="w-1/6"
          onChange={(e) => setDateEnd(e.target.value)}
        />
      </div> 
      <Button className="w-1/5 my-3" title="Ajouter des collaborateurs" />
      <TextArea
        placeholder={"Description du projet"}
        className="w-full"
        rows={"10"}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex justify-center">
        <ButtonBis className="w-1/6 mt-3" title="Créer le projet" onClick={create} />
      </div>
    </div>
  );
}
