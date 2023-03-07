import React from "react";
import Comment from "./Comment";

function Comments({ comments, update }) {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} update={update} />
      ))}
    </>
  );
}

export default Comments;
