import React from "react";
import Comment from "./Comment";

function Comments({ comments, update, delComment }) {
  function sortDate(a, b) {
    let da = new Date(a.createdAt).getTime();
    let db = new Date(b.createdAt).getTime();
    return da < db ? 1 : -1;
  }

  const commentsByDate = comments.sort(sortDate);

  return (
    <>
      {commentsByDate.map((comment) => (
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
