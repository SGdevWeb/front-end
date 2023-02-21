import React from "react";

export default function TextArea({
  className,
  name,
  placeholder,
  value,
  description,
  rows,
  id,
}) {
  return (
    <>
      <textarea
        name={name}
        className={`border-2 border-gradient-v rounded-lg ${className}`}
        placeholder={placeholder}
        value={value}
        id={id}
        rows={rows}
      ></textarea>
      {description && <div className="text-xs">{description}</div>}
    </>
  );
}
