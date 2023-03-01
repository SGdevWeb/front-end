import Button from "../../components/Base/ButtonBis";
import { Link } from "react-router-dom";
import ListProject from "../../components/Project/ListProject";
import React from "react";

const Home = () => {

  return (
    <div className="h-full">
      <Link to={"project/update/f017a9cd-ce87-40fe-a247-3f06880b80a3"}><Button title="salut"></Button></Link>
      <ListProject />
    </div>
  );
};

export default Home;
