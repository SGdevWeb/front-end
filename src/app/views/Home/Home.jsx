import ListProject from "../../components/Project/ListProject";
import React from "react";
import LikeButton from "../../components/Project/LikeButton";

const Home = () => {
  const uuid_project ="5a1756bc-d254-468f-9dfb-65a8afd7879a";
  return (
    <div className="h-full">
      <LikeButton isLogged={true} countLike={342} isliked={false} uuid_project={uuid_project}/>
      <ListProject />
    </div>
  );
};

export default Home;
