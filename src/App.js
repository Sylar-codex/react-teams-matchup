import React from 'react'; 
import Header from './header'; 
import Question from './question'; 
import Content from './content'; 
import Footer from './footer'; 
import './css/App.css'; 
import './css/index.css';     
import './css/fonts.css';    

function App() {
  return ( 
    <div className="App">
      <Header /> 
      <Content /> 
    </div> 
    
  );
 
} 
  
export default App;
