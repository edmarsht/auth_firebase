import React from "react";
import fun from "./fun.gif"
import "./PrivateHome.css"

function PrivateHome() {
  return (
    <div className="privatehome">
        <div className="privatehome__container">
      <h1>
        I am the sweet private Home
      </h1>
      <img src={fun} alt="fun gift" />
        </div>
    </div>
  );
}

export default PrivateHome;
