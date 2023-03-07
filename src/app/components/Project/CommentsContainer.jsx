import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { getCommentByProjectId } from "../../api/backend/comment";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import { useSelector } from "react-redux";

function CommentsContainer({ uuid_project }) {
  const [comments, setComments] = useState([]);
  const isLogged = useSelector(selectIsLogged);

  useEffect(() => {
    getCommentByProjectId(uuid_project)
      .then((response) => {
        const comments = response.data;
        setComments(comments);
      })
      .catch((error) => console.log(error));
  }, []);

  const addComment = () => {
    getCommentByProjectId(uuid_project)
      .then((response) => {
        const comments = response.data;
        setComments(comments);
      })
      .catch((error) => console.log(error));
  };

  const update = () => {
    getCommentByProjectId(uuid_project)
      .then((response) => {
        const comments = response.data;
        setComments(comments);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-2xl mb-3">
        <span className="border-b-2 border-black">COMMENTAIRES</span>
      </h2>
      {isLogged && (
        <NewComment addComment={addComment} uuid_project={uuid_project} />
      )}
      <Comments comments={comments} update={update} />
    </div>
  );
}

export default CommentsContainer;
