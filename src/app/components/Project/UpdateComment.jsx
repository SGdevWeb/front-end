import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateComment } from "../../api/backend/comment";
import TextArea from "../base/TextArea";

function UpdateComment({ comment, setIsUpdate, update }) {
  const commentValue = comment.comment;
  const [textareaValue, setTextareaValue] = useState(commentValue);
  const [error, setError] = useState(false);

  function handleSubmit() {
    console.log(textareaValue);
    if (!textareaValue) {
      return setError(true);
    } else {
      setError(false);
    }
    setIsUpdate(false);
    const updatedComment = {
      comment: textareaValue,
      uuid: comment.uuid,
    };
    updateComment(updatedComment)
      .then((response) => {
        console.log(response);
        update();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex">
      <div className="w-full">
        <div className="mt-2">
          <TextArea
            value={textareaValue}
            className="w-full"
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </div>
        {error && <p className="text-red-600 text-base mt-1">Message vide !</p>}
      </div>
      <div className="flex items-end">
        <button
          className="flex items-end cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          <span className="text-3xl font-bold text- text-transparent bg-clip-text gradient m-2">
            {">"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default UpdateComment;
