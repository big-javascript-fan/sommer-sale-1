import React from "react";
import "./Input.scss";

function Input({ className, inputRef, ...props }) {
  return (
    <>
      <input {...props} className={`input-wrapper ${className}`} ref={inputRef} />
    </>
  );
}

export default Input;
