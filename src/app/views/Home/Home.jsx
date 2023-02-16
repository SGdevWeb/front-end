import ListProject from "../../components/Project/ListProject";
import React from "react";
import SideBar from "../../components/layouts/SideBar";

const Home = () => {
  return (
    <div className="h-full">
      {/* <SideBar/> */}
      <ListProject />
    </div>
  );
};

export default Home;
