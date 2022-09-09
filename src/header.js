import React from "react";
import "./css/header.css";
import "./css/fonts.css";
import "./css/App.css";

const header = () => (
  <div className="top-container">
    <div className="i2">
      <i className="fa fa-bars"></i>
      <i className="fa-regular fa-circle-question fa-beat-fade-short"></i>
    </div>
    <div>
      <h1>Check Ball</h1>
    </div>
    <div>
      <i className="fas fa-gear fa-spin-hover"></i>
      <i className="fas fa-square-poll-vertical"></i>
    </div>
  </div>
);

export default header;
