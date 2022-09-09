import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/fonts.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./font-awesome-6.1.1/css/all.css";
import "./fonts/basketball/basketball.otf";
import "./fonts/blank-river/blank-river.ttf";
import "./fonts/game-of-squids/game-of-squids.ttf";
import "./fonts/ghoust/ghoust-outline.otf";
import "./fonts/ghoust/ghoust-shadow.otf";
import "./fonts/ghoust/ghoust-solid.otf";
import "./fonts/graffiti-city/graffiti-city.otf";
import "./fonts/sega/sega.ttf";
import "./fonts/tesla/tesla.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
