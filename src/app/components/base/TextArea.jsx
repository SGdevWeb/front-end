import React from "react";

export default function TextArea({
  className,
  name,
  placeholder,
  value,
  description,
  cols,
  rows,
  id,
  onChange,
}) {
  return (
    <>
      <textarea
        name={name}
        className={`bg-gray-1 text-gray-700 border-none rounded-2xl ${className}`}
        placeholder={placeholder}
        value={value}
        cols={cols}
        rows={rows}
        id={id}
        onChange={onChange}
        style={{ resize: "none" }}
      ></textarea>
      {description && <div className="text-xs">{description}</div>}
    </>
  );
}
