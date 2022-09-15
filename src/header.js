import React from "react";
import "./css/header.css";
import "./css/fonts.css";
import "./css/App.css";
import { toast } from "react-toastify";

function header() {
  const notify = () => {
    toast("hey you just clicked me");
  };
  return (
    <div className="top-container">
      <div className="i2">
        <i
          onClick={() => {
            notify();
          }}
          className="fa fa-bars"
        ></i>
        <i
          onClick={() => {
            notify();
          }}
          className="fa-regular fa-circle-question fa-beat-fade-short"
        ></i>
      </div>
      <div className="check-ball">
        <h1
          onClick={() => {
            notify();
          }}
        >
          Check Ball
        </h1>
      </div>
      <div>
        <i
          onClick={() => {
            notify();
          }}
          className="fas fa-gear fa-spin-hover"
        ></i>
        <i
          onClick={() => {
            notify();
          }}
          className="fas fa-square-poll-vertical"
        ></i>
      </div>
    </div>
  );
}

export default header;
