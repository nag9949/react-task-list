import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className={` alert bg-${type} text-white text-capitalize`}>{text}</div>
  );
};

export default Alert;
