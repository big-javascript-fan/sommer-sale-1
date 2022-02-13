import React from "react";
import "./Checkbox.scss";
function Checkbox({ inputRef, ...props }) {
  return (
    <>
      <label className="checkbox-wrapper">
        <input type="checkbox" {...props} ref={inputRef} />
        <span className="checkbox-mark"></span>
      </label>
    </>
  );
}

export default Checkbox;
