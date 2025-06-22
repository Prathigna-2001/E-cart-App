
import React from "react";
import "./Title.css"; 

const Title = ({ text, subtext }) => {
  return (
    <div className="title-container">
      <h2 className="title-main">{text}</h2>
      {subtext && <p className="title-subtext">{subtext}</p>}
      <div className="title-underline"> treendy web site..</div>
    </div>
  );
};

export default Title;
