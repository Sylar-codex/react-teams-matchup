import React from "react";
import "./css/fonts.css";
import "./css/App.css";
import basketBall from "./img/basketball.png";
/* Import nba team json data */
import teams from "./data/teams.json";

function Teamselector() {
  return (
    <>
      <>
        <>
          <div className="App-header">
            <header className="App-header">
              <p>
                Pick two NBA teams and see how they matchup with each other.
              </p>
            </header>
          </div>
        </>
        <div className="image-container">
          <div className="gallery-img-1">
            <img
              src={basketBall}
              // src="src/img/basketball.png"
              alt="no team"
            />
          </div>

          <h3>vs</h3>
          <div className="gallery-img-2">
            <img
              src={basketBall}
              // src="src/img/basketball.png"
              alt="no team"
            />
          </div>
        </div>
      </>
      <div className="submit-container">
        <div className="grid-divider-dottted">
          <label htmlFor="teamsId">team-1</label>
          <br />
          <select id="teamsId" name="teams">
            {teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <h3>Submit</h3>
        <div className="grid-divider-dottted">
          <label htmlFor="teamsId">team-2</label>
          <br />
          <select id="teamsId" name="teams">
            {teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Teamselector;
