import React from "react";

import Comment from "./Comment";

function Comments({ comments, update }) {
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            update={update}
            userId={comment.uuid_user}
          />
        ))}
    </>
  );
}

export default Comments;
