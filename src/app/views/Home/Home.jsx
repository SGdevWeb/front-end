import Button from "../../components/Base/ButtonBis";
import { Link } from "react-router-dom";
import ListProject from "../../components/Project/ListProject";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Link to={"project/update/5078bfc7-65ed-4472-8a3e-9f2aabfb30e7"}><Button title="salut"></Button></Link>
      <ListProject />
    </div>
  );
};

export default Home;
