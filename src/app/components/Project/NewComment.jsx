import React, { useEffect, useRef, useState } from "react";

import { commentPost } from "../../api/backend/comment";

function NewComment({ addComment, uuid_project }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (inputValue.length === 0 && error !== null) {
      setError(true);
    }
    if (inputValue.length > 0) {
      setError(false);
    }
    if (!isTextareaFocused) {
      setError(null);
    }
    setCharCount(inputValue.length);
  }, [inputValue, isTextareaFocused]);

  function handleSubmit(e) {
    e.preventDefault();
    textareaRef.current.focus();
    const value = inputValue;
    if (!value) {
      return setError(true);
    }
    const newComment = {
      comment: value,
      uuid_project,
    };
    commentPost(newComment)
      .then(() => {
        setError(null);
        setInputValue("");
        addComment();
      })
      .catch((error) => console.log(error));
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
          maxLength={250}
          onBlur={() => setIsTextareaFocused(false)}
          onFocus={() => setIsTextareaFocused(true)}
          ref={textareaRef}
        />
        <button
          className="flex items-end cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          <span className="text-3xl font-bold text- text-transparent bg-clip-text gradient mr-1">
            {">"}
          </span>
        </button>
      </form>
      <div className="flex justify-between">
        <p className="text-red-600 text-base mt-1">
          {error ? "Message vide !" : ""}
        </p>
        <small className="mr-2">{charCount}/250 caractères</small>
      </div>
    </div>
  );
}

export default NewComment;
