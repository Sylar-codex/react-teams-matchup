import React from "react";  
import './css/fonts.css';   
import './css/App.css';

const content = () => (
  <><><><div className="App-header">
    <header className="App-header">
      <p>
        Pick two NBA teams and see how they matchup with each other.
      </p>
    </header>
  </div></>
    <div className="image-container">
      <div><img src="src/img/basketball.png" class="gallery-img" alt="no team" /></div>
      <h3>vs</h3>
      <div><img src="src/img/basketball.png" class="gallery-img" alt="no team" /></div>
    </div></><div className="submit-container">
      <div className="grid-divider-dottted"></div>
      <h3>Submit</h3>
      <div className="grid-divider-dottted"></div>
    </div></>  
  )

export default content;