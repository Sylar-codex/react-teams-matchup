import React from 'react'; 
import Header from './header'; 
import Teamselector from './teamselector'; 
import Footer from './footer'; 
import './css/App.css'; 
import './css/index.css';     
import './css/fonts.css';     
import Grid from './Grid';

function App() {
  return ( 
    <div className="App">
      <Header /> 
      <Teamselector />  
      <Grid /> 
      <Footer /> 
    </div> 
  );
} 
  
export default App;
