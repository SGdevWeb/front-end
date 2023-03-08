import React from "react";
import Comment from "./Comment";

function Comments({ comments, update, delComment }) {
  return (
    <>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          comment={comment}
          update={update}
          delComment={delComment}
        />
      ))}
    </>
  );
}

export default Comments;
