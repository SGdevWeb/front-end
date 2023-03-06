import React, { useEffect, useRef, useState } from "react";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { getCommentByProjectId } from "../../api/backend/comment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux-store/authenticationSlice";
import axios from "axios";

function CommentsContainer() {
  const [comments, setComments] = useState([]);
  // const uuidProject = useParams().id;
  const uuidProject = "e73bab9a-7d74-4e18-a647-040c16742467";
  const isLogged = useSelector(selectIsLogged);

  useEffect(() => {
    getCommentByProjectId(uuidProject)
      .then((response) => {
        const comments = response.data;
        setComments(comments);
      })
      .catch((error) => console.log(error));
  }, []);

  const addComment = () => {
    // const newComment = comment
    // setComments([...comments, newComment])
    getCommentByProjectId(uuidProject)
      .then((response) => {
        const comments = response.data;
        setComments(comments);
      })
      .catch((error) => console.log(error));
  };

  const update = () => {
    getCommentByProjectId(uuidProject)
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
      {isLogged && <NewComment addComment={addComment} />}
      <Comments comments={comments} update={update} />
    </div>
  );
}

export default CommentsContainer;
