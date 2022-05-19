import React from 'react'; 
import Header from './header'; 
import Question from './question'; 
import Content from './content'; 
import Footer from './footer'; 
import './css/App.css'; 
import './css/index.css';     
import './css/fonts.css';    
import teamsList from './data/teams.json';
import Grid from './Grid';

function App() {
  return ( 
    <div className="App">
      <Header /> 
      <Content />  
      <Grid /> 
      <Footer /> 
    </div> 
  );
} 
  
export default App;
