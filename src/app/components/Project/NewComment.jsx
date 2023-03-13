import React, { useState } from "react";

import { commentPost } from "../../api/backend/comment";

function NewComment({ addComment, uuid_project }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputValue;
    if (!value) {
      return setError(true);
    } else {
      setError(false);
    }
    const newComment = {
      comment: value,
      uuid_project,
    };
    setLoading(true);
    commentPost(newComment)
      .then((response) => {
        addComment();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    setInputValue("");
  }

  function updateTextAreaHeight(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="mb-3">
      <form className="flex justify-between border-2 border-gradient-v rounded-lg">
        <textarea
          onInput={updateTextAreaHeight}
          style={{ resize: "none" }}
          className="w-full border-none rounded-lg focus:outline-none focus:ring-0"
          type="text"
          placeholder="Ecrire un message ..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="flex items-end cursor-pointer"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          <span className="text-3xl font-bold text- text-transparent bg-clip-text gradient mr-1">
            {">"}
          </span>
        </button>
      </form>
      {error && <p className="text-red-600 text-base mt-1">Message vide !</p>}
    </div>
  );
}

export default NewComment;